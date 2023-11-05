function Reset({ resetAmount, resetPercentage }) {
    return (
        <div className="w-full p-2 rounded-md grid lg:text-lg">
            <button className="bg-slate-200 rounded-md p-2 hover:bg-slate-300" onClick={() => { resetAmount(""); resetPercentage(0) }}>Reset All</button>
        </div>
    )
}

export default Reset