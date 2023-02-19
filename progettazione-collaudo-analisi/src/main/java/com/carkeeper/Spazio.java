package com.carkeeper;

import java.util.ArrayList;
import java.util.List;

public class Spazio {

    private String identificativo;
    private List<Utente> listaMembri;
    private List<Veicolo> listaVeicoli;

    public Spazio(String identificativo) {
        this.identificativo = identificativo;
        this.listaMembri = new ArrayList<Utente>();
        this.listaVeicoli = new ArrayList<Veicolo>();
    }


    public String getIdentificativo() {
        return identificativo;
    }

    public void setIdentificativo(String identificativo) {
        this.identificativo = identificativo;
    }

    public List<Utente> listaMembri() {
        return listaMembri;
    }

    public List<Veicolo> listaVeicoli() {
        return listaVeicoli;
    }

    public void aggiungiMembro(Utente utente) {
        this.listaMembri.add(utente);
    }

    public void rimuoviMembro(Utente utente) {
        this.listaMembri.remove(utente);
    }

    public void associaVeicolo(Veicolo veicolo) {
        this.listaVeicoli.add(veicolo);
    }

    public void dissociaVeicolo(Veicolo veicolo) {
        this.listaVeicoli.remove(veicolo);
    }
}
