import './masonry.css';

import professionals from '../../utils/professionalList.json';

export const ProfessionalList = () => {
    return (
        <section className="section" id="team">
            <div className="container">
                <h2 className="is-title green-text has-text-weight-bold has-text-centered is-size-1"> Profissionais </h2>
                <h4 className="is-subtitle green-text has-text-weight-semibold has-text-centered is-size-5-mobile is-size-4">
                Somos Psicólogos, Psiquiatras, Neuropsicólogos, Psicopedagogos, Pedagogos e Terapeuta.
                </h4>
                <br />
            </div> 
            <div className="container">
                <div className="masonry">
                    {professionals.map((element: { name: string; specialty: string; register: string; _id: number; picture: boolean; description: string; }) => {
                        return(
                            <div className="item">
                                <div className="card">
                                    <div className="card-content">
                                        <div className="media">
                                            {element.picture ? ( 
                                            <div className="media-left">
                                                <figure className="image is-128x128">
                                                    <img src={"https://s3-sa-east-1.amazonaws.com/espacoresiliencia.com/profissionais/" + element._id + ".jpg"} alt={element.name}></img>
                                                </figure>
                                            </div>
                                            ):<></> } 
                                            <div className="media-content">
                                                <p className="title is-size-5-desktop is-size-4-tablet is-size-6-mobile">{element.name}</p>
                                                <p className="subtitle is-size-6-desktop is-size-6-tablet is-size-7-mobile">{element.specialty}{element.register}</p>
                                            </div>
                                        </div>
                                        <div className="content is-size-6 has-text-justified has-text-weight-light">{element.description}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>           
    )
}
