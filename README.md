
# Proyecto Frontend
## evascor();


Página web basada en mi CV personal.


## Authors

- [@evascor](https://www.github.com/evascor)


## Badges

![Lines of code](https://img.shields.io/tokei/lines/github/evascor/proyectoFrontend)
[![CodeFactor](https://www.codefactor.io/repository/github/evascor/proyectofrontend/badge)](https://www.codefactor.io/repository/github/evascor/proyectofrontend)

## Color Reference

| :root             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| --accion | ![#6ECBF5](https://via.placeholder.com/10/6ECBF5?text=+) #6ECBF5 |
| --texto-oscuro | ![#ff194b](https://via.placeholder.com/10/ff194b?text=+) #ff194b |
| --texto-claro | ![#e0d9f6](https://via.placeholder.com/10/e0d9f6?text=+) #e0d9f6 |
| --bg-claro | ![#586ae2](https://via.placeholder.com/10/586ae2?text=+) #586ae2 |
| --bg-oscuro | ![#2a2356](https://via.placeholder.com/10/2a2356?text=+) #2a2356 |

## Temas Oscuro y Claro

El tema cambiará automáticamente dependiendo de la hora que detecte en su equipo. A continuación se presentan las clases que definen los temas oscuro y claro:

### Modo Claro
A partir de las 06:00h

```
.light-theme {
  --fondo-color: var(--bg-claro);
  --fuente-color: var(--texto-claro);
  --fondo-btn: var(--accion);
  --btn-fuente-color: var(--texto-claro);
}
```
### Modo Oscuro
A partir de las 21:00h
```
.dark-theme {
  --fondo-color: var(--bg-oscuro);
  --fuente-color: var(--texto-oscuro);
  --fondo-btn: var(--accion);
  --btn-fuente-color: var(--texto-oscuro);
}
```
