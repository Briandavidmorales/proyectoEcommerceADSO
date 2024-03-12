//Se crea una interfaz llamada SeedProduct 

interface SeedProduct {
    description: string;
    images: string[];
    inStock: number;
    price: number;
    slug: string;
    tags: string[];
    title: string;
    type: ValidTypes;
    gender: 'mouse' | 'streaming' | 'keyboard' | 'kits' | 'accesories';
}

type ValidTypes =
    | 'wireless'
    | 'wired'
    | 'beginners'
    | 'intermediate'
    | 'advanced';

//Esta interfaz es creada para cuando queramos crear usuarios anticipados
interface SeedData {
    products: SeedProduct[];
}

export const initialData: SeedData = {
    products: [
        {
            description:
                'Audifono inalambrico multiplataforma con conexión 2.4 GHz y TRRS 3.5 mm. son ideales para escuchar tu música favorita,  responder llamadas telefónicas. Sin cables enredados que te brindan libertad de movimiento, dejando los oídos totalmente libres,  son especiales para para correr, senderismo, ciclismo, evita el incómodo dolor de tus oídos internos por el uso continuo de los auriculares intraurales.',
            images: ['audifono-1.png', 'audifono-2.png','audifono-3.png'],
            inStock: 7,
            price: 393000,
            slug: 'streaming_gravity',
            type: 'wireless',
            tags: ['gamming'],
            title: 'Gravity',
            gender: 'streaming',
        },
        {
            description:
                'Teclado inalambrico con Diseño Moderno Y Compacto: MK470 destaca por su simplicidad y su perfil fino y su diseño minimalista que se adapta a tu exclusivo estilo de vida',
            images: ['teclado-1.png', 'teclado-2.png','teclado-3.png'],
            inStock: 5,
            price: 200000,
            slug: 'keyboard_Alnila',
            type: 'wired',
            tags: ['keyboard'],
            title: 'keyboard_Alnila',
            gender: 'keyboard',
        }
    ]
}
