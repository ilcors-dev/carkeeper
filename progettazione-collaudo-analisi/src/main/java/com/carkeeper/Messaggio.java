package com.carkeeper;

import java.util.Date;

public class Messaggio {
    private TagMessaggio tag;
    private String testo;
    private Date dataora;

    public Messaggio(TagMessaggio tag, String testo, Date dataora) {
        this.tag = tag;
        this.testo = testo;
        this.dataora = dataora;
    }

    public TagMessaggio getTag() {
        return tag;
    }

    public String getTesto() {
        return testo;
    }

    public Date getDataora() {
        return dataora;
    }
}
