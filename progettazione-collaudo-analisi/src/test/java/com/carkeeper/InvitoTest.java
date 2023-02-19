package com.carkeeper;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import java.util.Calendar;
import java.util.Date;

import org.junit.Before;
import org.junit.Test;

public class InvitoTest {
    private Profilo mittente;
    private Profilo destinatario;
    private Invito invito;
    private Calendar calendar;

    @Before
    public void setUp() {
        this.mittente = new Profilo("+391237650745", "mittente");
        this.destinatario = new Profilo("+391437984712", "destinatario");

        calendar = Calendar.getInstance();
        calendar.setTime(new Date());

        calendar.add(Calendar.DAY_OF_MONTH, 10);

        this.invito = new Invito(calendar.getTime(), mittente.getTelefono(), destinatario.getTelefono());
    }

    @Test
    public void testCostruttore() {
        assertEquals(mittente.getTelefono(), invito.getNumeroTelefonoInvitante());
        assertEquals(destinatario.getTelefono(), invito.getNumeroTelefonoInvitato());
        assertEquals(calendar.getTime(), invito.getScadenza());
        assertNotNull(invito.getCodice());
    }
}
