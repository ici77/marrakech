export type Priority = 'essential' | 'recommended' | 'optional';
export type ReservationStatus = 'confirmed' | 'paid' | 'pending_payment' | 'pending_confirmation' | 'planned' | 'optional' | 'cancelled';
export type Confidence = 'confirmed' | 'estimated' | 'to_verify';
export interface Money { amount: number; currency: 'EUR' | 'MAD'; confidence: Confidence }
export interface Destination { id: string; name: string; region: string; summary: string; image: string }
export interface Activity { id: string; title: string; start?: string; end?: string; description: string; priority: Priority; type: string; status?: Confidence; reservationId?: string; monumentId?: string; restaurantId?: string; mapUrl?: string }
export interface TripDay { id: string; date: string; destinationId: string; title: string; summary: string; accommodation: string; zone?: string; activities: Activity[] }
export interface Reservation { id: string; title: string; category: string; date: string; status: ReservationStatus; travelers: number; amount?: Money; note: string; provider?: string; paymentDate?: string; cancellation?: string; dayId?: string }
export interface Monument { id: string; name: string; destinationId: string; dayId: string; priority: Priority; openingHours: string; admission: string; duration: string; status: 'pending' | 'visited'; cultural: string; history?: string; architecture?: string; observe?: string; route?: string; sources?: string[] }
export interface Restaurant { id: string; name: string; destinationId: string; cuisine: string; price: string; recommendation: string; zone?: string; dayId?: string; reservationStatus?: ReservationStatus }
export type RestaurantCategory = 'tradicional' | 'economico' | 'terraza' | 'premium' | 'espectaculo' | 'cafeteria' | 'rapida' | 'internacional';
export type RestaurantRole = 'reservado' | 'primera_opcion' | 'alternativa' | 'opcional' | 'cafeteria' | 'terraza';
export interface MarrakechRestaurant extends Restaurant { city: 'Marrakech'; categories: RestaurantCategory[]; role: RestaurantRole; description: string; specialties: string; atmosphere: string; terrace?: boolean; views?: string; priceForFive?: string; priceKind?: 'estimado' | 'confirmado' | 'consumicion'; recommendedDays: string[]; nearbyMonuments: string[]; reason: string; reservationId?: string; address?: string; hours?: string; website?: string; menu?: string; instagram?: string; maps?: string }
export interface Expense { id: string; title: string; category: string; date: string; amount: number; currency: 'EUR' | 'MAD'; kind: 'actual' | 'estimated' | 'committed' }
export interface Trip { id: string; title: string; startsAt: string; endsAt: string; travelers: number }
