package com.carkeeper;

import java.util.Date;

public class Promemoria {
    protected String note;
    protected Date scadenza;

    public Promemoria(Date scadenza, String note) {
        this.note = note;
        this.scadenza = scadenza;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Date getScadenza() {
        return scadenza;
    }

    public void setScadenza(Date scadenza) {
        this.scadenza = scadenza;
    }
}
