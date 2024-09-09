import Image from "next/image";

export function TechLogo({name}: { name: string }) {
    const logos: { [key: string] } = {
        Sql: {
            src: "/logos/sql.svg",
            alt: "Sql"
        },
        React: {
            src: "/logos/react.svg",
            alt: "React"
        },
        Vue: {
            src: "/logos/vue.svg",
            alt: "Vue"
        },
        Node: {
            src: "/logos/node.svg",
            alt: "Node"
        },
        TypeScript: {
            src: "/logos/typescript.svg",
            alt: "Typescript"
        },
        PostgreSQL: {
            src: "/logos/postgresql.svg",
            alt: "PostgreSql"
        },
        Laravel: {
            src: "/logos/laravel.svg",
            alt: "Laravel"
        },
        Docker: {
            src: "/logos/docker.svg",
            alt: "Docker"
        },
        MongoDB: {
            src: "/logos/mongodb.svg",
            alt: "Mongodb"
        },
        Symfony: {
            src: "/logos/symfony.svg",
            alt: "Symfony"
        },
        Next: {
            src: "/logos/nextjs.svg",
            alt: "Next Js"
        },
        Nuxt: {
            src: "/logos/nuxt.svg",
            alt: "Nuxt"
        },
        Redis: {
            src: "/logos/redis.svg",
            alt: "Redis"
        },
        Git: {
            src: "/logos/git.svg",
            alt: "Git"
        },
        Vagrant: {
            src: "/logos/vagrant.svg",
            alt: "Vagrant"
        },
        Tailwind: {
            src: "/logos/tailwind.svg",
            alt: "Tailwind"
        },
        PrismaORM: {
            src: "/logos/prisma.svg",
            alt: "Prisma"
        },
        Stripe: {
            src: "/logos/stripe.svg",
            alt: "Stripe"
        },
        Supabase: {
            src: "/logos/supabase.svg",
            alt: "Supabase"
        },
    }

    return (
        <div title={name} className={'items-center justify-center flex'}>
            { <Image src={logos[name].src} alt={logos[name].alt} width={35} height={35} />  || <div className="w-6 h-6 bg-gray-300 rounded-full"/>}
        </div>
    )
}