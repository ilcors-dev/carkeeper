package com.carkeeper;

import static org.junit.Assert.assertEquals;

import java.util.Calendar;
import java.util.Date;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import com.carkeeper.Controller.AccettazioneInvitoController;
import com.carkeeper.Controller.ApprovaMembroController;
import com.carkeeper.Controller.GestioneSpazioController;
import com.carkeeper.Controller.InvitaMembroController;

public class TestGestioneInviti {
    private static DataBaseMock db = new DataBaseMock();
    private InvitaMembroController IMController = new InvitaMembroController(db);
    private AccettazioneInvitoController AIController = new AccettazioneInvitoController(db);
    private ApprovaMembroController AMController = new ApprovaMembroController(db);
    private GestioneSpazioController GSController = new GestioneSpazioController(db);
    
    private Spazio spazio = new Spazio("000001");
    @Before
    public void setUp() {
        db = new DataBaseMock();
        db.addSpazio(spazio);
    }

    @Test
    public void testCreaInvito() {
        Utente utente = db.getUtenti().get(0);
        Spazio spazio = db.getSpazi().get(0);

        Invito invitoCreato = IMController.creaInvito("+391234567890", 
            utente.getTelefono(), 
            spazio.getIdentificativo(), 
            "SMS/EMAIL/WHATSAPP");

        Invito invitoDB = db.getInviti().get(db.getInviti().size() - 1);
        assertEquals(invitoDB, invitoCreato);
        assertEquals("INVIATO", invitoDB.getStato());
    }

    @Test
    public void testAccettaInvito() {
        Invito invito = db.getInviti().get(0);
        assertEquals("INVIATO", invito.getStato().getStatoInvito());

        AIController.accettaInvito(invito.getCodice());
        assertEquals("ACCETTATO", db.getInviti().get(0).getStato().getStatoInvito());
    }

    @Test
    public void testAccettaInvitoScaduto() {
        Date now = Calendar.getInstance().getTime();
        Invito invito = new Invito(now, "", "");
        invito.setStato(new StatoInvito("INVIATO"));
        db.addInvito(invito);
        
        AIController.accettaInvito(invito.getCodice());
        assertEquals("SCADUTO", db.getInviti().get(0).getStato().getStatoInvito());
    }

    @Test
    public void testApprovaInvito() {
        Invito invito = db.getInviti().get(0);
        assertEquals("ACCETTATO", invito.getStato().getStatoInvito());

        AMController.approva(invito.getCodice());

        assertEquals("APPROVATO", db.getInviti().get(0).getStato().getStatoInvito());
        Utente utente = db.getUtente(invito.getNumeroTelefonoInvitato());
        assertEquals("MEMBRO", utente.getStato().getTipoUtente());
        Assert.assertTrue(GSController.listaMembri(spazio.getIdentificativo()).contains(utente));
    }
}

