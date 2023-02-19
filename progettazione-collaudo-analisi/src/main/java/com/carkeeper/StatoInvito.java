package com.carkeeper;

import java.time.LocalDateTime;

public class StatoInvito {
    public String statoInvito;
    public LocalDateTime timestamp;

    public StatoInvito() {
        this.statoInvito = "Standard";
        this.timestamp = LocalDateTime.now();
    }

    public StatoInvito(String statoInvito) {
        this.statoInvito = statoInvito;
    }

    public String getStatoInvito() {
        return statoInvito;
    }
}
