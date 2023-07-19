import './index.css'

const Pagenation = ({data}) => {
    let pages = []
    for (let i = 1; i< Math.ceil(data.length/ 10)+1; i++){
        pages.push(i)
    }
    return(
        <div className="pages-conatiner">
            {pages.map(page => (
            <div className="page-item">
                {page}
            </div>
            ))}
        </div>
    )
}

export default Pagenation