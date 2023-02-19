package com.carkeeper;

import java.util.Date;

public class PromemoriaVeicolo extends Promemoria {
    private CategoriaPromemoriaVeicolo categoria;

    public PromemoriaVeicolo(Date scadenza, String note, CategoriaPromemoriaVeicolo categoria) {
        super(scadenza, note);
        this.categoria = categoria;
    }

    public CategoriaPromemoriaVeicolo getCategoria() {
        return categoria;
    }

    public void setCategoria(CategoriaPromemoriaVeicolo categoria) {
        this.categoria = categoria;
    }
}
