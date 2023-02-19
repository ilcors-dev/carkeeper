package com.carkeeper;

import java.util.ArrayList;
import java.util.List;

public class DataBaseMock {
    private List<Utente> utenti;
    private List<Veicolo> veicoli;
    private List<Spazio> spazi;
    private List<Invito> inviti;
    
    public DataBaseMock() {
        this.utenti = new ArrayList<Utente>();
        this.veicoli = new ArrayList<Veicolo>();
        this.spazi = new ArrayList<Spazio>();
        this.inviti = new ArrayList<Invito>();
    }
    
    public void addUtente(Utente u) {
        this.utenti.add(u);
    }

    public void addVeicolo(Veicolo v) {
        this.veicoli.add(v);
    }

    public void addInvito(Invito i) {
        this.inviti.add(i);
    }

    public void addSpazio(Spazio s) {
        this.spazi.add(s);
    }

    public List<Utente> getUtenti() {
        return utenti;
    }

    public List<Veicolo> getVeicoli() {
        return veicoli;
    }

    public List<Spazio> getSpazi() {
        return spazi;
    }

    public List<Invito> getInviti() {
        return inviti;
    }

    public Utente getUtente(String numeroTelefono) {
        for (Utente u : this.utenti) {
            if (u.getTelefono().equals(numeroTelefono)) {
                return u;
            }
        }
        return null;
    }

    public Veicolo getVeicolo(String vin) {
        for (Veicolo v : this.veicoli) {
            if (v.getVin().equals(vin)) {
                return v;
            }
        }
        return null;
    }

    public Spazio getSpazio(String identificativo) {
        for (Spazio s : this.spazi) {
            if (s.getIdentificativo().equals(identificativo)) {
                return s;
            }
        }
        return null;
    }

    public Invito getInvito(String getCodice) {
        for (Invito i : this.inviti) {
            if (i.getCodice().equals(getCodice)) {
                return i;
            }
        }
        return null;
    }
}
