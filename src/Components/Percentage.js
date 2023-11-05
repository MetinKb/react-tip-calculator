function Percentage({ percentage, calcPercentage }) {
    return (
        <div>
            <div className="grid items-center lg:text-xl">
                <label htmlFor="percentage">Did you (all) like the service?</label>
                <select id="percentage" className="rounded-md border-2 border-slate-400 mt-2" onChange={e => calcPercentage(+e.target.value)} value={percentage}>
                    <option value="0">Dissatisfied. (0%)</option>
                    <option value="5">So so. (5%)</option>
                    <option value="10">It was good. (10%)</option>
                    <option value="20">Amazing! (20%)</option>
                </select>
            </div>
        </div>
    )
}

export default Percentage