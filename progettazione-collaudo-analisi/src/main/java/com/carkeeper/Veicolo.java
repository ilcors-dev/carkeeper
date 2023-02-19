package com.carkeeper;

import java.util.ArrayList;

public class Veicolo {
    private String vin;
    private ClasseVeicolo classeVeicolo;

    private String nome;
    private int velocitaMassima = -1;
    private String produttore;
    private String motore;
    private int cilindrata = -1;
    private String tipoVeicolo;
    private int pesoVeicolo = -1;
    private int potenzaMotore = -1;
    private int cavalli = -1;
    private boolean laneAssist = false;
    private boolean brakeAssistant;
    private boolean cruiseControl;
    private boolean adaptiveCruiseControl;
    private boolean collisionWarning;
    private boolean abs;
    private boolean tractionControl;
    private double voltaggioBatteria;
    private int ampsBatteria;
    private int ampsOra;
    private int numPosti;
    private int base;
    private int altezza;
    private String tipoCarburantePrimario;
    private String tipoCarburanteSecondario;

    private double latitudinePosizione;
    private double longitudinePosizione;
    private double altitudinePosizione;
    private int livelloCarburante;
    private int kmPercorsi;
    private int velocitaDelVeicolo;
    private int temperaturaMotore;

    private ArrayList<Messaggio> messaggi;
    private ArrayList<PromemoriaVeicolo> promemoria;

    public Veicolo(String vin) {
        this.vin = vin;
        this.messaggi = new ArrayList<Messaggio>();
        this.promemoria = new ArrayList<PromemoriaVeicolo>();
        this.initDatiStatici();
        this.initDatiDinamici();
    }

    public void initDatiStatici() {
        this.classeVeicolo = ClasseVeicolo.EURO6;
        this.nome = "Fiat 500";
        this.velocitaMassima = 150;
        this.produttore = "Fiat";
        this.motore = "1.2 3 cilindri";
        this.cilindrata = 1200;
        this.tipoVeicolo = "Berlina";
        this.pesoVeicolo = 1000;
        this.potenzaMotore = 51;
        this.cavalli = 70;
        this.laneAssist = true;
        this.brakeAssistant = true;
        this.cruiseControl = true;
        this.adaptiveCruiseControl = false;
        this.collisionWarning = true;
        this.abs = true;
        this.tractionControl = true;
        this.voltaggioBatteria = 12;
        this.ampsBatteria = 470;
        this.ampsOra = 52;
        this.numPosti = 4;
        this.base = 3571;
        this.altezza = 1627;
        this.tipoCarburantePrimario = "Benzina";
        this.tipoCarburanteSecondario = null;
    }

    public void initDatiDinamici() {
        this.latitudinePosizione = 44.5075;
        this.longitudinePosizione = 11.3514;
        this.altitudinePosizione = 54;
        this.livelloCarburante = 64;
        this.kmPercorsi = 34287;
        this.velocitaDelVeicolo = 0;
        this.temperaturaMotore = 75;
    }

    public String getVin() {
        return vin;
    }

    public ClasseVeicolo getClasseVeicolo() {
        return classeVeicolo;
    }

    public void setVin(String vin) {
        this.vin = vin;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setVelocitaMassima(int velocitaMassima) {
        this.velocitaMassima = velocitaMassima;
    }

    public void setProduttore(String produttore) {
        this.produttore = produttore;
    }

    public void setMotore(String motore) {
        this.motore = motore;
    }

    public void setCilindrata(int cilindrata) {
        this.cilindrata = cilindrata;
    }

    public void setTipoVeicolo(String tipoVeicolo) {
        this.tipoVeicolo = tipoVeicolo;
    }

    public void setPesoVeicolo(int pesoVeicolo) {
        this.pesoVeicolo = pesoVeicolo;
    }

    public void setPotenzaMotore(int potenzaMotore) {
        this.potenzaMotore = potenzaMotore;
    }

    public void setCavalli(int cavalli) {
        this.cavalli = cavalli;
    }

    public void setLaneAssist(boolean laneAssist) {
        this.laneAssist = laneAssist;
    }

    public String getNome() {
        return nome;
    }

    public int getVelocitaMassima() {
        return velocitaMassima;
    }

    public String getProduttore() {
        return produttore;
    }

    public String getMotore() {
        return motore;
    }

    public int getCilindrata() {
        return cilindrata;
    }

    public String getTipoVeicolo() {
        return tipoVeicolo;
    }

    public int getPesoVeicolo() {
        return pesoVeicolo;
    }

    public int getPotenzaMotore() {
        return potenzaMotore;
    }

    public int getCavalli() {
        return cavalli;
    }

    public boolean hasLaneAssist() {
        return laneAssist;
    }

    public boolean hasBrakeAssistant() {
        return brakeAssistant;
    }

    public boolean hasCruiseControl() {
        return cruiseControl;
    }

    public boolean hasAdaptiveCruiseControl() {
        return adaptiveCruiseControl;
    }

    public boolean hasCollisionWarning() {
        return collisionWarning;
    }

    public boolean hasAbs() {
        return abs;
    }

    public boolean hasTractionControl() {
        return tractionControl;
    }

    public double getVoltaggioBatteria() {
        return voltaggioBatteria;
    }

    public int getAmpsOra() {
        return ampsOra;
    }

    public int getAmpsBatteria() {
        return ampsBatteria;
    }

    public int getNumPosti() {
        return numPosti;
    }

    public int getBase() {
        return base;
    }

    public int getAltezza() {
        return altezza;
    }

    public String getTipoCarburantePrimario() {
        return tipoCarburantePrimario;
    }

    public String getTipoCarburanteSecondario() {
        return tipoCarburanteSecondario;
    }

    public double getLatitudinePosizione() {
        return latitudinePosizione;
    }

    public double getLongitudinePosizione() {
        return longitudinePosizione;
    }

    public double getAltitudinePosizione() {
        return altitudinePosizione;
    }

    public int getLivelloCarburante() {
        return livelloCarburante;
    }

    public int getKmPercorsi() {
        return kmPercorsi;
    }

    public int getVelocitaDelVeicolo() {
        return velocitaDelVeicolo;
    }

    public int getTemperaturaMotore() {
        return temperaturaMotore;
    }

    public ArrayList<Messaggio> getMessaggi() {
        return messaggi;
    }

    public void addMessaggio(Messaggio messaggio) {
        this.messaggi.add(messaggio);
    }

    public ArrayList<PromemoriaVeicolo> getPromemoria() {
        return promemoria;
    }

    public void addPromemoria(PromemoriaVeicolo promemoria) {
        this.promemoria.add(promemoria);
    }

    public void removePromemoria(PromemoriaVeicolo promemoria) {
        this.promemoria.remove(promemoria);
    }
}
