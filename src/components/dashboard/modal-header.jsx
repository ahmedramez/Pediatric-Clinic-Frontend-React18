const ModalHeader=( {title} )=>{
    return (
        <div className="row m-0 rounded">
        <h4 style={{color:"#9aafff"}} className="text-center  text-grey-light  p-0 bg-gradient rounded-top py-2 position-relative">
            {title}
            <button className="btn p-0 border-0 text-white position-absolute p-0"
                    style={{left:"0%",top:"-15%"}} type="button" data-bs-dismiss="modal">
                <svg fill="#f00" width="64" height="64" viewBox="0 0 16 16">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                </svg>
            </button>
        </h4>
        <hr className="text-blue-dark opacity-100" />
    </div>
);
}
export default ModalHeader;