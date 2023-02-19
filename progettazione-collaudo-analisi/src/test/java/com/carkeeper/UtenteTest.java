package com.carkeeper;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;

import java.util.Date;

import org.junit.Before;
import org.junit.Test;

public class UtenteTest {
    private Utente Utente;

    @Before
    public void setUp() {
        Utente = new Utente("+391237650745", "nomeUtente");
    }

    @Test
    public void testCostruttore() {
        assertEquals("+391237650745", Utente.getTelefono());
        assertEquals("nomeUtente", Utente.getNomeUtente());
        assertNull(Utente.getAvatar());
    }

    @Test
    public void testSetter() {
        Utente.setTelefono("0987654321");
        assertEquals("0987654321", Utente.getTelefono());
        Utente.setNomeUtente("nuovoNomeUtente");
        assertEquals("nuovoNomeUtente", Utente.getNomeUtente());
        Utente.setAvatar("nuovoAvatarLink");
        assertEquals("nuovoAvatarLink", Utente.getAvatar());
    }

    @Test
    public void testPromemoria() {
        PromemoriaUtente promemoria = new PromemoriaUtente(new Date(), null, CategoriaPromemoriaUtente.PATENTE);
        Utente.addPromemoria(promemoria);
        assertEquals(1, Utente.getPromemoria().size());
        assertEquals(promemoria, Utente.getPromemoria().get(0));
    }

    @Test
    public void testRemovePromemoria() {
        PromemoriaUtente promemoria = new PromemoriaUtente(new Date(),
                "da pagare assicurazione, 450 €", CategoriaPromemoriaUtente.PATENTE);
        Utente.addPromemoria(promemoria);
        assertEquals(1, Utente.getPromemoria().size());
        Utente.removePromemoria(promemoria);
        assertEquals(0, Utente.getPromemoria().size());
    }

    @Test
    public void testModificaPromemoria() {
        PromemoriaUtente promemoria = new PromemoriaUtente(new Date(),
                "da pagare assicurazione, 450 €", CategoriaPromemoriaUtente.PATENTE);
        Utente.addPromemoria(promemoria);
        assertEquals(1, Utente.getPromemoria().size());
        promemoria.setNote("da pagare, 100 €");
        assertEquals("da pagare, 100 €", Utente.getPromemoria().get(0).getNote());
    }
}
