import "../assets/styles/style_about.css"
export const About = () => {
  return (
    <>
      <h1>ABOUT US</h1>

      <div className="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/upul1LCTqbA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="div-text">
        <h4>LEADER IN CANADA</h4>
        <p>
          We are the leading job recruitment consultation website in Canada with
          a presence in 10 provinces and 3 territories of the North American
          country.
        </p>
        <p>
          It is the job recruitment consultation website with the most visits in
          Ontario, British Columbia, Quebec and Alberta as well as the second in
          Provinces such as Nova Scotia, Saskatchewan, Nunavut, Yukon and
          Northwest Territories.
        </p>
        <p>
          Ayuda a las empresas a encontrar al profesional con el mejor perfil
          para su bacante y a crecer en sus estandares en la seleccion de su
          personal. Con este objetivo ofrece también soluciones innovadoras para
          la gestión del talento y la digitalización del reclutamiento.
        </p>
      </div>
    </>
  )
}
