package com.carkeeper;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;

import java.util.Date;

import org.junit.Before;
import org.junit.Test;

public class ProfiloTest {
    private Profilo profilo;

    @Before
    public void setUp() {
        profilo = new Profilo("+391237650745", "nomeUtente");
    }

    @Test
    public void testCostruttore() {
        assertEquals("+391237650745", profilo.getTelefono());
        assertEquals("nomeUtente", profilo.getNomeUtente());
        assertNull(profilo.getAvatar());
    }

    @Test
    public void testSetter() {
        profilo.setTelefono("0987654321");
        assertEquals("0987654321", profilo.getTelefono());
        profilo.setNomeUtente("nuovoNomeUtente");
        assertEquals("nuovoNomeUtente", profilo.getNomeUtente());
        profilo.setAvatar("nuovoAvatarLink");
        assertEquals("nuovoAvatarLink", profilo.getAvatar());
    }

    @Test
    public void testPromemoria() {
        PromemoriaProfilo promemoria = new PromemoriaProfilo(new Date(), null, CategoriaPromemoriaProfilo.PATENTE);
        profilo.addPromemoria(promemoria);
        assertEquals(1, profilo.getPromemoria().size());
        assertEquals(promemoria, profilo.getPromemoria().get(0));
    }

    @Test
    public void testRemovePromemoria() {
        PromemoriaProfilo promemoria = new PromemoriaProfilo(new Date(),
                "da pagare assicurazione, 450 €", CategoriaPromemoriaProfilo.PATENTE);
        profilo.addPromemoria(promemoria);
        assertEquals(1, profilo.getPromemoria().size());
        profilo.removePromemoria(promemoria);
        assertEquals(0, profilo.getPromemoria().size());
    }

    @Test
    public void testModificaPromemoria() {
        PromemoriaProfilo promemoria = new PromemoriaProfilo(new Date(),
                "da pagare assicurazione, 450 €", CategoriaPromemoriaProfilo.PATENTE);
        profilo.addPromemoria(promemoria);
        assertEquals(1, profilo.getPromemoria().size());
        promemoria.setNote("da pagare, 100 €");
        assertEquals("da pagare, 100 €", profilo.getPromemoria().get(0).getNote());
    }
}
