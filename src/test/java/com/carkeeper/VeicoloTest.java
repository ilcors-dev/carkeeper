package com.carkeeper;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;

import java.util.Date;

import org.junit.Before;
import org.junit.Test;

public class VeicoloTest {
    private Veicolo veicolo;

    @Before
    public void setUp() {
        veicolo = new Veicolo("12345678901234567");
    }

    @Test
    public void testCostruttore() {
        assertEquals("12345678901234567", veicolo.getVin());
        assertEquals(ClasseVeicolo.EURO6, veicolo.getClasseVeicolo());
        assertEquals("Fiat 500", veicolo.getNome());
        assertEquals("1.2 3 cilindri", veicolo.getMotore());
        assertEquals(150, veicolo.getVelocitaMassima());
        assertEquals("Fiat", veicolo.getProduttore());
        assertEquals(1200, veicolo.getCilindrata());
        assertEquals("Berlina", veicolo.getTipoVeicolo());
        assertEquals(1000, veicolo.getPesoVeicolo());
        assertEquals(51, veicolo.getPotenzaMotore());
        assertEquals(70, veicolo.getCavalli());
        assertEquals(true, veicolo.hasLaneAssist());
        assertEquals(true, veicolo.hasBrakeAssistant());
        assertEquals(true, veicolo.hasCruiseControl());
        assertEquals(false, veicolo.hasAdaptiveCruiseControl());
        assertEquals(true, veicolo.hasCollisionWarning());
        assertEquals(true, veicolo.hasAbs());
        assertEquals(true, veicolo.hasTractionControl());
        assertEquals(12, veicolo.getVoltaggioBatteria(), 0);
        assertEquals(52, veicolo.getAmpsOra());
        assertEquals(470, veicolo.getAmpsBatteria());
        assertEquals(4, veicolo.getNumPosti());
        assertEquals(3571, veicolo.getBase());
        assertEquals(1627, veicolo.getAltezza());
        assertEquals("Benzina", veicolo.getTipoCarburantePrimario());
        assertNull(veicolo.getTipoCarburanteSecondario());
        assertEquals(0, veicolo.getMessaggi().size());

        assertEquals(44.5075, veicolo.getLatitudinePosizione(), 10);
        assertEquals(11.3514, veicolo.getLongitudinePosizione(), 10);
        assertEquals(54, veicolo.getAltitudinePosizione(), 0);
        assertEquals(64, veicolo.getLivelloCarburante());
        assertEquals(34287, veicolo.getKmPercorsi());
        assertEquals(0, veicolo.getVelocitaDelVeicolo());
        assertEquals(75, veicolo.getTemperaturaMotore());
    }

    @Test
    public void testMessaggio() {
        Messaggio messaggio = new Messaggio(TagMessaggio.INFO, "Test", new Date());
        veicolo.addMessaggio(messaggio);
        assertEquals(1, veicolo.getMessaggi().size());
        assertEquals(messaggio, messaggio);
    }

    @Test
    public void testAddPromemoria() {
        PromemoriaVeicolo promemoria = new PromemoriaVeicolo(new Date(),
                "da pagare assicurazione, 450 €", CategoriaPromemoriaVeicolo.ASSICURAZIONE);
        veicolo.addPromemoria(promemoria);
        assertEquals(1, veicolo.getPromemoria().size());
        assertEquals(promemoria, promemoria);
    }

    @Test
    public void testRemovePromemoria() {
        PromemoriaVeicolo promemoria = new PromemoriaVeicolo(new Date(),
                "da pagare assicurazione, 450 €", CategoriaPromemoriaVeicolo.ASSICURAZIONE);
        veicolo.addPromemoria(promemoria);
        assertEquals(1, veicolo.getPromemoria().size());
        veicolo.removePromemoria(promemoria);
        assertEquals(0, veicolo.getPromemoria().size());
    }

    @Test
    public void testModificaPromemoria() {
        PromemoriaVeicolo promemoria = new PromemoriaVeicolo(new Date(),
                "da pagare assicurazione, 450 €", CategoriaPromemoriaVeicolo.ASSICURAZIONE);
        veicolo.addPromemoria(promemoria);
        assertEquals(1, veicolo.getPromemoria().size());
        promemoria.setNote("da pagare, 100 €");
        assertEquals("da pagare, 100 €", veicolo.getPromemoria().get(0).getNote());
    }
}
