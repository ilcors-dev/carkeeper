package com.carkeeper;

import java.util.Date;

public class Invito {
    private String codice;
    private Date dataora;
    private Date scadenza;
    private String numeroTelefonoInvitante;
    private String numeroTelefonoInvitato;

    public Invito(Date scadenza, String numeroTelefonoInvitante, String numeroTelefonoInvitato) {
        this.codice = String.valueOf(Math.random()).substring(2, 10);
        this.dataora = new Date();
        this.scadenza = scadenza;
        this.numeroTelefonoInvitante = numeroTelefonoInvitante;
        this.numeroTelefonoInvitato = numeroTelefonoInvitato;
    }

    public String getCodice() {
        return codice;
    }

    public Date getDataora() {
        return dataora;
    }

    public Date getScadenza() {
        return scadenza;
    }

    public String getNumeroTelefonoInvitante() {
        return numeroTelefonoInvitante;
    }

    public String getNumeroTelefonoInvitato() {
        return numeroTelefonoInvitato;
    }
}
