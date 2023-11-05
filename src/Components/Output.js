function Output({ percentage, amount, bill }) {
    return (
        <div className="lg:text-xl">
            <p>{`You need to pay $${bill} ($${amount} + ${percentage}%)`}</p>
        </div>
    )
}

export default Output