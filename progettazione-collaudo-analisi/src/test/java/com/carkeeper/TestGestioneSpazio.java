package com.carkeeper;

import static org.junit.Assert.assertEquals;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import com.carkeeper.Controller.GestioneMembriController;
import com.carkeeper.Controller.GestioneSpazioController;
import com.carkeeper.Controller.GestioneVeicoloController;

public class TestGestioneSpazio {
    private static DataBaseMock db = new DataBaseMock();
    private GestioneSpazioController GSController = new GestioneSpazioController(db);
    private GestioneMembriController GMController = new GestioneMembriController(db);
    private GestioneVeicoloController GVController = new GestioneVeicoloController(db);
    
    private Spazio spazio = new Spazio("0000001");
    @Before
    public void setUp() {
        db = new DataBaseMock();

        Utente utente = new Utente("+391237650745", "nomeUtente");
        db.addUtente(utente);

        Veicolo veicolo = new Veicolo("12345678901234567");
        db.addVeicolo(veicolo);

        db.addSpazio(spazio);
    }

    @Test
    public void testAggiungiMembro() {
        Utente utente = db.getUtenti().get(0);
        GSController.aggiungiMembro(spazio.getIdentificativo(), utente);
        Assert.assertTrue(GSController.listaMembri(spazio.getIdentificativo()).contains(utente));
    }

    @Test
    public void testAssociaVeicolo() {
        Veicolo veicolo = db.getVeicoli().get(0);
        GSController.associaVeicolo(spazio.getIdentificativo(), veicolo);
        Assert.assertTrue(GSController.listaVeicoli(spazio.getIdentificativo()).contains(veicolo));
    }

     @Test
    public void testDissociaVeicolo() {
        Veicolo veicolo = db.getVeicoli().get(0);
        GVController.dissocia(veicolo.getVin());
        Assert.assertFalse(GSController.listaVeicoli(spazio.getIdentificativo()).contains(veicolo));
    }

    @Test
    public void testRimuoviUltimoMembro() {
        Utente utente = db.getUtenti().get(0);
        Assert.assertTrue(GSController.listaMembri(spazio.getIdentificativo()).size() == 1);
        GMController.abbandonaSpazio(spazio.getIdentificativo(), utente, "1234");
        assertEquals("UtenteStandard", db.getUtenti().get(0).getStato().getTipoUtente());
        Assert.assertFalse(db.getSpazi().contains(spazio));
    }

   
}

