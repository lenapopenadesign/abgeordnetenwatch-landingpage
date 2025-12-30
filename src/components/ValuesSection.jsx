import valuesImage from '../assets/values-image.jpg'

function ValuesSection() {
  return (
    <section className="values-section">
      <div className="values-image">
        <img src={valuesImage} alt="Vielfalt, Demokratie, Weltoffenheit und Toleranz" />
      </div>
      <div className="values-content">
        <h2>Vielfalt, Demokratie, Weltoffenheit und Toleranz</h2>
        <p>
          abgeordnetenwatch.de setzt sich durch Bürger:innenbeteiligung und Transparenz für eine selbstbestimmte, demokratische Gesellschaft ein, in der jede:r gleich viel wert ist. Diese Haltung spiegelt sich neben unserem{' '}
          <a href="https://www.abgeordnetenwatch.de/ueber-uns/mehr/moderations-codex">Codex für die Moderation</a>
          {' '}von Anfragen auch in unseren{' '}
          <a href="https://www.abgeordnetenwatch.de/ueber-uns/werte">Werten</a>
          {' '}wider.
        </p>
      </div>
    </section>
  )
}

export default ValuesSection
