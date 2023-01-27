const blogPosts = [
  {
    id: 1,
    title: "Videoproduktion",
    href: "#",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { name: "Kreativ", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    preview:
      "Sie brauchen einen Unternehmensfilm? Ihr nächstes Event soll für die Nachwelt festgehalten werden? Oder haben Sie bereits Material und suchen jemanden für den Feinschliff? Als professionelle Videografen übernehmen wir vom Script bis zur Postproduction den kompletten Produktionsprozess.",
  },
  {
    id: 2,
    title: "Social Media",
    href: "#",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    category: { name: "Management", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    preview:
      "Keine Zeit zum Posten? Ob Instagram, LinkedIn oder TikTok: Wir halten Ihre Followers auf dem Laufenden und etablieren Ihre Marke nachhaltig auf Social Media – damit Sie immer in Verbindung bleiben. ",
  },
  {
    id: 3,
    title: "Branding",
    href: "#",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    category: { name: "Design", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    preview:
      "Kleidung macht bekanntlich Leute. Wir stellen sicher, dass Ihr Unternehmen das richtige Outfit trägt. Vom Logo bis zur Visitenkarte – lassen Sie uns auf einen Blick vermitteln, warum Ihre Marke einzigartig ist!",
  },
];
export default function Services() {
  return (
    <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="relative">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-lg font-semibold text-cyan-600">Leistungen</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Was brauchen Sie?
          </p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            Ob Rebranding, Instagram Post oder Imagefilm: Wir machen den Kern
            Ihres Unternehmens sicht- und greifbar. Wählen Sie einfach Ihr Paket
            und wir erledigen den Rest!
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-md gap-8 px-4 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:grid-cols-3 lg:px-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-cyan-600">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.preview}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
