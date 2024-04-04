import React, { useState } from 'react';

const gaTypen = [
  { label: 'GA Erwachsene', value: 'GA Erwachsene', preis: 3000 },
  { label: 'GA Jugendliche', value: 'GA Jugendliche', preis: 2000 },
];

const App = () => {
  const [datum, setDatum] = useState(new Date());
  const [gaTyp, setGaTyp] = useState('GA Erwachsene');
  const [klasse, setKlasse] = useState('1. Klasse');
  const [zahlung, setZahlung] = useState('pro Jahr');
  const [gültigBis, setGültigBis] = useState('');

  const berechnePreis = () => {
    let preis = gaTypen.find(t => t.value === gaTyp).preis;

    // Preis für Klasse
    if (klasse === '1. Klasse') {
      preis += 1500;
    }

    // Preis für Zahlungsweise
    if (zahlung === 'pro Monat') {
      preis /= 12;
    }

    return preis;
  };

  const handleDatumChange = (e) => {
    setDatum(e.target.value);
    const ausgangsDatum = new Date(e.target.value);
    const neuesDatum = new Date(ausgangsDatum);
    neuesDatum.setFullYear(neuesDatum.getFullYear() + 1);
    setGültigBis(neuesDatum);
  };

  return (
    <div>
      <h1>GA Bestellung</h1>

      <p>Bitte wählen Sie das Datum aus, ab dem das GA gültig sein soll:</p>
      <input type="date" value={datum} onChange={handleDatumChange} />

      <p>Bitte wählen Sie den GA-Typ aus:</p>
      <select value={gaTyp} onChange={(e) => setGaTyp(e.target.value)}>
        {gaTypen.map(t => (
          <option key={t.value} value={t.value}>{t.label}</option>
        ))}
      </select>

      <p>Bitte wählen Sie die Klasse aus:</p>
      <label>
        <input type="radio" name="klasse" value="1. Klasse" checked={klasse === '1. Klasse'} onChange={() => setKlasse('1. Klasse')} />
        1. Klasse
      </label>

      <label>
        <input type="radio" name="klasse" value="2. Klasse" checked={klasse === '2. Klasse'} onChange={() => setKlasse('2. Klasse')} />
        2. Klasse
      </label>

      <p>Bitte wählen Sie die Zahlungsweise aus:</p>
      <label>
        <input type="radio" name="zahlung" value="pro Jahr" checked={zahlung === 'pro Jahr'} onChange={() => setZahlung('pro Jahr')} />
        pro Jahr
      </label>

      <label>
        <input type="radio" name="zahlung" value="pro Monat" checked={zahlung === 'pro Monat'} onChange={() => setZahlung('pro Monat')} />
        pro Monat
      </label>

      <p>Der Preis beträgt: {berechnePreis().toFixed(2)} CHF</p>
      {gültigBis && <p>Gültig bis: {new Date(gültigBis).toLocaleDateString()}</p>}
    </div>
  );
};

export default App;
