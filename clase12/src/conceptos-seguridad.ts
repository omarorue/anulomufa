import sha256 from 'sha256'
import {v4 as uuid} from 'uuid'

/*
La password que me llega este en clear (sin encriptar)
Esto es cuando se crea el usuario porque se crea con usuario:password
y cuando se autentica el usuario usuario:password

Dado que NO se puede guardar la password en clear, como se encripta
*/

let salt = [uuid(), uuid()].join('__')

let sha2Messi = sha256('messi' + salt)

console.log('Guardamos el hash')
console.log(sha2Messi)

// en el metodo de login me va a llegar usuario y passowrd

let passwordValidar = sha256('messi'+ salt)

if (sha2Messi === passwordValidar) {
    console.log('Las passwords coninciden')
}
else {
    console.log('Las passwords NO coninciden')
}



/*
La idea es NO autenticarse con usuario y password

Desventajas de los token aleatorios. Tenia que persistirlo en una base.
X Si llega a venir el token, puedo saber si fue emitido por mi mismo.
El json web token, yo puedo re generarlo a partir la parte1.parte2 + clave secreta.
Si coincide con la firma - NO EXISTE POSIBILIDAD DE ERRARLE LO GENERE YO.
No necesito guardarlo en ningun lado.

*/


// Codificaciones - Codificaciones NO son encriptacion.
/*

0, 1
0, 1, 2, 3, 4, 5, 6, 7, 8, 9
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F
Base32
Base64



0 1
1 1
1 0 0 - Es cuatro en sistema decimal.

  9
  9
1 2


Base64

0	A
1	B
2	C
3	D
4	E
5	F
6	G
7	H
8	I
9	J
10	K
11	L
12	M
13	N
14	O
15	P
   
Valor	Carácter
16	Q
17	R
18	S
19	T
20	U
21	V
22	W
23	X
24	Y
25	Z
26	a
27	b
28	c
29	d
30	e
31	f
   
Valor	Carácter
32	g
33	h
34	i
35	j
36	k
37	l
38	m
39	n
40	o
41	p
42	q
43	r
44	s
45	t
46	u
47	v
   
Valor	Carácter
48	w
49	x
50	y
51	z
52	0
53	1
54	2
55	3
56	4
57	5
58	6
59	7
60	8
61	9
62	+
63	/





*/

