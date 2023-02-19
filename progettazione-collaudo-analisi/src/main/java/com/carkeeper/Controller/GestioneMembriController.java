package com.carkeeper.Controller;

import com.carkeeper.DataBaseMock;
import com.carkeeper.Utente;

public class GestioneMembriController {
    private DataBaseMock db;

    public GestioneMembriController(DataBaseMock db) {
        this.db = db;
    }

    public void abbandonaSpazio(String identificativo, Utente utente, String pin) {
    }
}
