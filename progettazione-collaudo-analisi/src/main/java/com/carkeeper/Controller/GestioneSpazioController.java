package com.carkeeper.Controller;

import java.util.List;

import com.carkeeper.DataBaseMock;
import com.carkeeper.Utente;
import com.carkeeper.Veicolo;

public class GestioneSpazioController {
    private DataBaseMock db;

    public GestioneSpazioController(DataBaseMock db) {
        this.db = db;
    }

    public List<Utente> listaMembri(String identificativo) {
        return db.getSpazio(identificativo).listaMembri();
    }

    public List<Veicolo> listaVeicoli(String identificativo) {
        return db.getSpazio(identificativo).listaVeicoli();
    }

    public void aggiungiMembro(String identificativo, Utente utente) {
        db.getSpazio(identificativo).aggiungiMembro(utente);
    }

    public void rimuoviMembro(String identificativo, Utente utente) {
        db.getSpazio(identificativo).rimuoviMembro(utente);
    }

    public void associaVeicolo(String identificativo,Veicolo veicolo) {
        db.getSpazio(identificativo).associaVeicolo(veicolo);
    }

    public void dissociaVeicolo(String identificativo,Veicolo veicolo) {
        db.getSpazio(identificativo).dissociaVeicolo(veicolo);
    }
}
