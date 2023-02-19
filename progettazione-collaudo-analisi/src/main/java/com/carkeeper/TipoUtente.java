package com.carkeeper;

import java.time.LocalDateTime;

public class TipoUtente {
    private String tipoUtente;
    private LocalDateTime timestamp;

    public TipoUtente() {
        this.tipoUtente = "Standard";
        this.timestamp = LocalDateTime.now();
    }

    public String getTipoUtente() {
        return tipoUtente;
    }
}
