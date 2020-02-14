class Puissance4 {

    constructor(grid_dimension = { x: 7, y: 6 }) {
            //assignation de variables
            this.grid_dimension = grid_dimension;
            this.player_one = 1;
            this.player_two = 2;
            this.turn = 1;
            this.max_turn = this.grid_dimension.x * this.grid_dimension.y;
            this.count_turn = 0;
            this.winner = null;
            this.grid = [];



            this.generate_grid();



            $("td").click((e) => this.handleClick(e));
        }
        // Mon even click appelé sur le td// le target = notre image
    handleClick(e) {
        //parseFloat transforme les chaines de caractère(exemple data-col="0") en integer
        //on récupère la colonne
        let x = parseFloat($(e.target).parent().attr('data-col'));
        let y = this.check_last_index(x);

        // console.log(x,y);
        //On détermine les coordonnées ou placer les jetons
        this.addJetons(y, x);
        // cibler et placer le jeton sur img(html)...visuellement (mettre condition pr changer jeton en fction du joueur)
        //alterner joueur courant(this.turn)
        // compter les tours (this.count_turn++)
        // update notre grille en mettant 1 ou 2 en fction du joueur(à partir des coord. y et x)

        //
        // $("tr:nth-child(" + ( y+1 ) +") td:nth(" + (x + 1)+") img").attr('src', './img/jetonswag.png')


    }


    addJetons(y, x) {
        // ici on update notre grille javascript
        this.grid[y][x] = this.turn;

        // ici on update notre table html (pour placer visuellement le jeton)
        // ps : il faut changer le jeton en fonction du joueur courant (this.turn)

        // Condition pour placer le premier jeton dans le html
        if (this.turn == this.player_one) {
            $("tr:nth-child(" + (y + 1) + ") td:nth-child(" + (x + 1) + ") img").attr('src', './img/jetonswag.png')
        }

        // Condition pour placer le deuxieme jeton dans le html
        if (this.turn == this.player_two) {
            $("tr:nth-child(" + (y + 1) + ") td:nth-child(" + (x + 1) + ") img").attr('src', './img/jetonalien.png')
        }

        // ON déclare check_win juste après avoir ajouté le jeton
        let winnerH = this.check_win(y, x, this.turn);
        console.log(winnerH)

        // On alterne le joueur courant (this.turn)
        this.turn = (this.turn === this.player_one) ? this.player_two : this.player_one

        // compter les tours (this.count_turn++)
        this.count_turn++;
        console.log(this.count_turn)
    }

    // x = param représentant l'abscisse; y = param représentant l'ordonnée; player= param représentant le joueur courant
    check_win(y, x, player) {
        let count = 0;
        for (let lrg = 0; lrg < this.grid_dimension.x; lrg++) {
            count = (this.grid[y][lrg] == player) ? count + 1 : 0;

            if (count >= 4) return true;

        }
        for (let htr = 0; htr < this.grid_dimension.y; htr++) {
            count = (this.grid[htr][x] == player) ? count + 1 : 0;

            if (count >= 4) return true;
        }

    }

    // check horizontal





    //vertical




    //diagonal


    // regarder si victoire ou null


    check_last_index(x) {
        //boucler sur la hauteur par rapport à la largeur. Nous la hauteur de l'index
        for (let h = this.grid_dimension.y - 1; h >= 0; h--) {
            if ((this.grid[h][x] === 0) && (this.grid[h][x] = 7)) {
                return h;

            }
        }
    }


    //Pour générere la grille
    generate_grid() {
        for (let h = 0; h < this.grid_dimension.y; h++) {
            this.grid[h] = [];
            for (let l = 0; l < this.grid_dimension.x; l++) {
                this.grid[h][l] = 0;
            }
        }
        console.log(this.grid);
    }
}

var game1 = new Puissance4();