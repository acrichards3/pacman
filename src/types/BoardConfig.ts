// Z = Red Ghost spawn
// X = Pink Ghost spawn
// C = Blue Ghost spawn
// V = Orange Ghost spawn
// S = Pacman spawn
// E = Ghost exit
// P = Portal
// B = Border
// . = Empty
// W = Wall
// o = Pellet
// O = Power Pellet

export type BoardConfig =
  | 'Z'
  | 'X'
  | 'C'
  | 'V'
  | 'E'
  | 'S'
  | 'P'
  | 'B'
  | '.'
  | 'W'
  | 'o'
  | 'O';
