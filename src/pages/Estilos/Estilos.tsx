import React, { useEffect, useState } from 'react'

type Cerveza = {
  _id?: string
  tipo: string
  descripcion: string
  temperatura_ideal?: string
  copa?: string
  abv?: string
  ibu?: string
}

const EstilosPage = () => {
  const [cervezas, setCervezas] = useState<Cerveza[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    fetch('/api/cervezas')
      .then(res => {
        if (!res.ok) throw new Error(String(res.status))
        return res.json()
      })
      .then((data: Cerveza[]) => {
        if (!mounted) return
        setCervezas(data)
        setError(null)
      })
      .catch(err => {
        if (!mounted) return
        setError(err.message || 'Error fetching')
        setCervezas([])
      })
      .finally(() => {
        if (!mounted) return
        setLoading(false)
      })

    return () => { mounted = false }
  }, [])

  return (
    <section className="w-full py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-4">Estilos</h1>
        <p className="text-gray-700 mb-6">Aquí listamos estilos obtenidos desde la API.</p>

        {loading && <div className="text-gray-500">Cargando estilos...</div>}
        {error && <div className="text-red-600">Error: {error}</div>}

        {!loading && !error && (!cervezas || cervezas.length === 0) && (
          <div className="text-gray-600">No hay estilos disponibles.</div>
        )}

        {!loading && cervezas && cervezas.length > 0 && (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6">
            {cervezas.map(c => (
              <article key={c._id ?? c.tipo} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-transform duration-200">
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{c.tipo}</h2>
                  <p className="text-gray-600 mt-2 line-clamp-4">{c.descripcion}</p>
                  <ul className="mt-3 text-sm text-gray-500 space-y-1">
                    {c.temperatura_ideal && <li><strong>Temperatura:</strong> {c.temperatura_ideal}</li>}
                    {c.copa && <li><strong>Copa:</strong> {c.copa}</li>}
                    {c.abv && <li><strong>ABV:</strong> {c.abv}</li>}
                    {c.ibu && <li><strong>IBU:</strong> {c.ibu}</li>}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default EstilosPage

