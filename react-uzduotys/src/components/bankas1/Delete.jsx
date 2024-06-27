export default function Delete({deleteData, setDeleteData, setDestroyData}) {
    

    if (null === deleteData) {
        return null;
    }

    return (
        <>
        <div className='blanket'></div>
        <div className="modal">
            <div className="modal-container">
                <div className="modal-header">
                    <h5 className="modal-title">Patvirtinkite</h5>
                    <button type="button" className="btn-close" onClick={_ => setDeleteData(null)}>x</button>
                </div>
                <div className="modal-body">
                    <p>Ar tikrai norite ištrinti sąskaitą?</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="black" onClick={_ => setDeleteData(null)}>Atšaukti</button>
                    <button type="button" className="red" onClick={_ => setDestroyData(deleteData)}>Ištrinti</button>
                </div>
            </div>
        </div>
        </>
    );
}