//Rocket2 prefab
class Rocket2 extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)

        scene.add.existing(this) // add object to existing scene
        this.isFiring = false    // track rocket's firing status
        this.moveSpeed = 2       // rocket speed in pixels/frame

        this.sfxShot = scene.sound.add('sfx-shot')
    }

    update() {
        // left/right movement
        if(!this.isFiring) {
            if(keyLEFT2.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.moveSpeed
            } else if (keyRIGHT2.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.x += this.moveSpeed
            }
        }
        // fire button
        if(Phaser.Input.Keyboard.JustDown(keyFIRE2) && !this.isFiring) {
            this.isFiring = true
            this.sfxShot.play()
        }
        // if fire, move up & left/right
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeed
            if(keyLEFT2.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.moveSpeed
            } else if (keyRIGHT2.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.x += this.moveSpeed
            }
        }
        //reset on miss
        if(this.y <= borderUISize * 3 + borderPadding) {
            this.isFiring = false
            this.y = game.config.height -borderUISize - borderPadding 
        }
    }

    // reset rocket to "ground"
    reset() {
        this.isFiring = false
        this.y = game.config.height - borderUISize - borderPadding 
    }
}
