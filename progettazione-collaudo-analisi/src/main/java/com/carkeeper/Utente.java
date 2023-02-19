package com.carkeeper;

import java.util.ArrayList;

public class Utente {
    private String telefono;
    private String nomeUtente;
    private String avatar;
    private TipoUtente tipoUtente;
    private ArrayList<PromemoriaUtente> promemoria;

    public Utente(String telefono, String nomeUtente) {
        this.telefono = telefono;
        this.nomeUtente = nomeUtente;
        this.promemoria = new ArrayList<PromemoriaUtente>();
        this.tipoUtente = new TipoUtente();
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getNomeUtente() {
        return nomeUtente;
    }

    public void setNomeUtente(String nomeUtente) {
        this.nomeUtente = nomeUtente;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public ArrayList<PromemoriaUtente> getPromemoria() {
        return promemoria;
    }

    public void setPromemoria(ArrayList<PromemoriaUtente> promemoria) {
        this.promemoria = promemoria;
    }

    public void addPromemoria(PromemoriaUtente promemoria) {
        this.promemoria.add(promemoria);
    }

    public void removePromemoria(PromemoriaUtente promemoria) {
        this.promemoria.remove(promemoria);
    }

    public TipoUtente getStato() {
        return this.tipoUtente;
    }
}
