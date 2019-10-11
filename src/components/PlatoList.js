import slug from "../helpers/slug";

export default class extends React.Component {

    render(){
        const {platos, onClickPlato } = this.props;

        return <div>
            {platos.map((plato) => (
                <a href={`/${slug(plato.channel.title)}.${plato.channel.id}/${slug(plato.title)}.${plato.id}`}
                className='plato'
                onClick={(event) => onClickPlato(event, plato)}>
                    <h3>{ plato.title }</h3>
                    <div>
                        {Math.ceil(plato.duration / 60)} minutes
                    </div>
                </a>
            ))}
            <style jsx>{`
                .plato {
                    color: #333;
                    padding: 15px;
                    border-bottom: 1px solid rgba(0,0,0,0.2);
                    cursor: pointer;
                }
                a.plato:hover {
                    color: #000;
                }
                .plato h3 {
                    margin: 0;
                }
                .plato .meta {
                    color: #666;
                    margin-top: 0.5em;
                    font-size: 0.8em;
                }
            `}</style>
        </div>
    }
}