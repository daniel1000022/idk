basic.forever(function () {
    music.setTempo(120)
    music.play(music.tonePlayable(196, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(247, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    for (let index = 0; index < 3; index++) {
        music.play(music.tonePlayable(220, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(247, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    for (let index = 0; index < 2; index++) {
        music.play(music.tonePlayable(196, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(220, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(196, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(196, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(220, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(247, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            # # # # #
            # . # . #
            # . # . #
            # . # . #
            # . # . #
            `)
        basic.showLeds(`
            # # # # .
            # . . . .
            # # # . .
            # . . . .
            # # # # .
            `)
        basic.showLeds(`
            # # # . .
            # . # . .
            # # # . .
            # . # . .
            # . . # .
            `)
        basic.showLeds(`
            # # # . .
            # . # . .
            # # # . .
            # . # . .
            # . . # .
            `)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . # # .
            . # . . .
            . # . . .
            . # . . .
            . . # # .
            `)
        basic.showLeds(`
            . # . . #
            . # . . #
            . # # # #
            . # . . #
            . # . . #
            `)
        basic.showLeds(`
            # # # # .
            # . . # .
            # # # # .
            # . . # .
            # . . . #
            `)
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            # # # # #
            `)
        basic.showLeds(`
            # # # . .
            # . . . .
            . # . . .
            . . # . .
            # # # . .
            `)
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            # # # # #
            # . # . #
            # . # . #
            # . # . #
            # . # . #
            `)
        basic.showLeds(`
            # # # . .
            # . # . .
            # # # . .
            # . # . .
            # . # . .
            `)
        basic.showLeds(`
            # # # . .
            # . . . .
            # # # . .
            . . # . .
            # # # . .
            `)
    }
    setTimeout(() => {
        console.log('This runs after 2 seconds');
    }, 2000);
        basic.showLeds(`
            # . . . #
            . . # . .
            . # . # .
            . . # . .
            # . . . #
            `)
    }
;})
