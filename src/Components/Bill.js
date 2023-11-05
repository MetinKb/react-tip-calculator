function Bill({ amount, setAmount }) {
    return (
        <div className="w-[90%]">
            <input value={amount} onChange={e => setAmount(+e.target.value)} type="text" placeholder="Amount" className="w-full p-2 rounded-md outline-none border-2 border-slate-400" />
        </div>
    )
}

export default Bill