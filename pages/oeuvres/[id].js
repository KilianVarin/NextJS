export const getStaticPaths = async () => {
    const res = await fetch('https://beta.api.danae.io/test');
    const data = await res.json();

    const paths = data.map(oeuvre => {
        return {
            params: { id: oeuvre.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://beta.api.danae.io/test/' + id);
    const data = await res.json();

    return {
        props: { oeuvre: data}
    }
}   

const Detail = ({ oeuvre}) => {
    return (
        <div>
            <h1>{ oeuvre.title }</h1>
            <p>{ oeuvre.price }</p>
            <p>{ oeuvre.pictures }</p>
            <p>{ oeuvre.artist.last_name }</p>
            <p>{ oeuvre.artist.first_name }</p>
            <p>{ oeuvre.artist.username }</p>
        </div>
    );
};

export default Detail;