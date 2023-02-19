package com.carkeeper;

import java.util.ArrayList;

public class Profilo {
    private String telefono;
    private String nomeUtente;
    private String avatar;

    private ArrayList<PromemoriaProfilo> promemoria;

    public Profilo(String telefono, String nomeUtente) {
        this.telefono = telefono;
        this.nomeUtente = nomeUtente;
        this.promemoria = new ArrayList<PromemoriaProfilo>();
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

    public ArrayList<PromemoriaProfilo> getPromemoria() {
        return promemoria;
    }

    public void setPromemoria(ArrayList<PromemoriaProfilo> promemoria) {
        this.promemoria = promemoria;
    }

    public void addPromemoria(PromemoriaProfilo promemoria) {
        this.promemoria.add(promemoria);
    }

    public void removePromemoria(PromemoriaProfilo promemoria) {
        this.promemoria.remove(promemoria);
    }
}
