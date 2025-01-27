// import { TriggerBoxShape, TriggerSphereShape } from '@dcl/npc-scene-utils'
import * as utils from "@dcl/ecs-scene-utils"

export default {
  sounds: {
    robots: {
      alice: new AudioClip("sounds/alice.mp3"),
      bela: new AudioClip("sounds/bela.mp3"),
      betty: new AudioClip("sounds/betty.mp3"),
      bob: new AudioClip("sounds/bob.mp3"),
      charlie: new AudioClip("sounds/charlie.mp3"),
      marsha: new AudioClip("sounds/marsha.mp3"),
      ron: new AudioClip("sounds/ron.mp3"),
    },
    ui: {
      navigationForward: new AudioClip("sounds/navigationForward.mp3"),
      navigationBackward: new AudioClip("sounds/navigationBackward.mp3"),
    },
    piano: {
      whiteKeys: {
        c3: new AudioClip("sounds/piano/c3.mp3"),
        d3: new AudioClip("sounds/piano/d3.mp3"),
        e3: new AudioClip("sounds/piano/e3.mp3"),
        f3: new AudioClip("sounds/piano/f3.mp3"),
        g3: new AudioClip("sounds/piano/g3.mp3"),
        a3: new AudioClip("sounds/piano/a3.mp3"),
        b3: new AudioClip("sounds/piano/b3.mp3"),
        c4: new AudioClip("sounds/piano/c4.mp3"),
        d4: new AudioClip("sounds/piano/d4.mp3"),
        e4: new AudioClip("sounds/piano/e4.mp3"),
        f4: new AudioClip("sounds/piano/f4.mp3"),
        g4: new AudioClip("sounds/piano/g4.mp3"),
        a4: new AudioClip("sounds/piano/a4.mp3"),
        b4: new AudioClip("sounds/piano/b4.mp3"),
        c5: new AudioClip("sounds/piano/c5.mp3"),
        d5: new AudioClip("sounds/piano/d5.mp3"),
        e5: new AudioClip("sounds/piano/e5.mp3"),
        f5: new AudioClip("sounds/piano/f5.mp3"),
        g5: new AudioClip("sounds/piano/g5.mp3"),
        a5: new AudioClip("sounds/piano/a5.mp3"),
        b5: new AudioClip("sounds/piano/b5.mp3"),
      },
      blackKeys: {
        cSharp3: new AudioClip("sounds/piano/cSharp3.mp3"),
        dSharp3: new AudioClip("sounds/piano/dSharp3.mp3"),
        fSharp3: new AudioClip("sounds/piano/fSharp3.mp3"),
        gSharp3: new AudioClip("sounds/piano/gSharp3.mp3"),
        aSharp3: new AudioClip("sounds/piano/aSharp3.mp3"),
        cSharp4: new AudioClip("sounds/piano/cSharp4.mp3"),
        dSharp4: new AudioClip("sounds/piano/dSharp4.mp3"),
        fSharp4: new AudioClip("sounds/piano/fSharp4.mp3"),
        gSharp4: new AudioClip("sounds/piano/gSharp4.mp3"),
        aSharp4: new AudioClip("sounds/piano/aSharp4.mp3"),
        cSharp5: new AudioClip("sounds/piano/cSharp5.mp3"),
        dSharp5: new AudioClip("sounds/piano/dSharp5.mp3"),
        fSharp5: new AudioClip("sounds/piano/fSharp5.mp3"),
        gSharp5: new AudioClip("sounds/piano/gSharp5.mp3"),
        aSharp5: new AudioClip("sounds/piano/aSharp5.mp3"),
      },
    },
  },
  models: {
    standard: {
      pianoBase: new GLTFShape("models/piano/pianoBase.glb"),
      muralWall: new GLTFShape("models/mural/muralWall.glb"),
    },
    robots: {
      alice: "models/robots/alice.glb",
      bela: "models/robots/bela.glb",
      betty: "models/robots/betty.glb",
      bob: "models/robots/bob.glb",
      charlie: "models/robots/charlie.glb",
      marsha: "models/robots/marsha.glb",
      ron: "models/robots/ron.glb",
      rings: new GLTFShape("models/robots/rings.glb"),
    },
  },
  textures: {
    blank: new Texture("images/ui/blank.png"),
    buttonE: new Texture("images/ui/buttonE.png"),
    buttonF: new Texture("images/ui/buttonF.png"),
    leftClickIcon: new Texture("images/ui/leftClickIcon.png"),
    textPanel: new Texture("images/ui/textPanel.png"),
    nftPanel: new Texture("images/ui/nftPanel.png"),
    closeButton: new Texture("images/ui/closeButton.png"),
    placeholder: new Texture("images/ui/placeholder.png"),
  },
  trigger: {
    triggerShape: new utils.TriggerSphereShape(8, Vector3.Zero()), // Trigger sphere with a radius of 8m
    triggerWhitePianoKey: new utils.TriggerBoxShape(new Vector3(0.35, 3.6, 2), new Vector3(0, 0, -1)),
    triggerBlackPianoKey: new utils.TriggerBoxShape(new Vector3(0.35, 3.6, 2), Vector3.Zero()),
  },
}



export const INVISIBLE_MATERIAL = new BasicMaterial()
const INVISIBLE_MATERIAL_texture = new Texture('images/transparent-texture.png')
INVISIBLE_MATERIAL.texture = INVISIBLE_MATERIAL_texture
INVISIBLE_MATERIAL.alphaTest = 1


/*
const emissiveBoxMat = new Material()
emissiveBoxMat.castShadows = false
//emissiveBoxMat.texture = new Texture('images/black.png')

emissiveBoxMat.albedoColor = Color4.Black()//Color4.White()
emissiveBoxMat.emissiveColor = Color3.Black()
emissiveBoxMat.emissiveIntensity = 0 
emissiveBoxMat.reflectivityColor = Color3.Black()
emissiveBoxMat.specularIntensity = 0
emissiveBoxMat.metallic = 0
emissiveBoxMat.roughness = 1  


const emissiveBoxMatOutline = new Material()
emissiveBoxMatOutline.albedoColor = Color4.Purple()//Color4.White()
emissiveBoxMatOutline.emissiveColor = Color3.Purple()
emissiveBoxMatOutline.emissiveIntensity = 10 
emissiveBoxMatOutline.reflectivityColor = Color3.Purple()
emissiveBoxMatOutline.specularIntensity = 0
emissiveBoxMatOutline.metallic = 0
emissiveBoxMatOutline.roughness = 1  


const emissiveGreenMat = new Material()
emissiveGreenMat.albedoColor = Color4.Green()//Color4.White()
emissiveGreenMat.emissiveColor = Color3.Green()
emissiveGreenMat.emissiveIntensity = 10 
emissiveGreenMat.reflectivityColor = Color3.Green()
emissiveGreenMat.specularIntensity = 0
emissiveGreenMat.metallic = 0
emissiveGreenMat.roughness = 1  




const outerBoxMat = new Material()
outerBoxMat.albedoColor = Color4.Black()
outerBoxMat.emissiveColor = Color3.Black()
outerBoxMat.emissiveIntensity = 10 
outerBoxMat.reflectivityColor = Color3.Black()
outerBoxMat.metallic = 1
outerBoxMat.roughness = 0

let normalPlaneShape = new GLTFShape('models/opaque_plane.glb')

*/
export const RESOURCES = {
        models:{
          names:{
            
          },
          instances:{
            //outerPlaneShape:normalPlaneShape
          }
        },
        textures: {
          //sprite_sheet: spriteSheetTexture,
          transparent: INVISIBLE_MATERIAL_texture,
          dialogAtlas: new Texture('https://decentraland.org/images/ui/dark-atlas-v3.png')
        },
        materials: {
          //sprite_sheet: spriteSheetMaterial
          transparent: INVISIBLE_MATERIAL,
          /*emissiveBoxMat: emissiveBoxMat,
          emissiveBoxMatOutline: emissiveBoxMatOutline,
          outerBoxMat: emissiveBoxMat,
          rabbitCheckPoints: emissiveGreenMat*/
        },
        strings:{
           
        },
        images:{
          portrait:{
          },
        }
}