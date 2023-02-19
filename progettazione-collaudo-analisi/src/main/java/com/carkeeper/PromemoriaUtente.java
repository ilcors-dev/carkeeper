package com.carkeeper;

import java.util.Date;

public class PromemoriaUtente extends Promemoria {
    private CategoriaPromemoriaUtente categoria;

    public PromemoriaUtente(Date scadenza, String note, CategoriaPromemoriaUtente categoria) {
        super(scadenza, note);
        this.categoria = categoria;
    }

    public CategoriaPromemoriaUtente getCategoria() {
        return categoria;
    }

    public void setCategoria(CategoriaPromemoriaUtente categoria) {
        this.categoria = categoria;
    }
}
