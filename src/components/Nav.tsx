export default function Nav({ teste }: any) {
    return (
        <header style={{ background: 'red', width: '100vw' }}>
            <nav>
                <ul>
                    <li>Tópico 1</li>
                    <li>Tópico 2</li>
                </ul>
            </nav>
            <p>{teste}</p>
        </header>
    )
}