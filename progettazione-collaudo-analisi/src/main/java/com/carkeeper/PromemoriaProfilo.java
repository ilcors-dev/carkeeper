package com.carkeeper;

import java.util.Date;

public class PromemoriaProfilo extends Promemoria {
    private CategoriaPromemoriaProfilo categoria;

    public PromemoriaProfilo(Date scadenza, String note, CategoriaPromemoriaProfilo categoria) {
        super(scadenza, note);
        this.categoria = categoria;
    }

    public CategoriaPromemoriaProfilo getCategoria() {
        return categoria;
    }

    public void setCategoria(CategoriaPromemoriaProfilo categoria) {
        this.categoria = categoria;
    }
}
