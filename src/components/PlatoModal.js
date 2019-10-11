import Link from "next/link";

export default class PlatoModal extends React.Component {

    render(){
        const {clip, onClose} = this.props;
        return <div>
            <nav>
                {onClose ? <a onClick={onClose}>&lt; Volver</a>
                    :
                    <Link href={`/channel?id=${clip.channel.id}`}>
                        <a>&lt; Volver</a>
                    </Link>
                 }
            </nav>
        </div>
    }
}