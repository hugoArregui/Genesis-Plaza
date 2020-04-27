import utils from '../node_modules/decentraland-ecs-utils/index'
import { Locations, teleport } from './modules/teleports'
import { setTriggerAreas } from './modules/triggers'

// AGORA BUILDING

//add agora
let agora = new Entity()
agora.addComponent(new GLTFShape('models/agora.glb'))
agora.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
)
engine.addEntity(agora)

// L' ARTICHOKE

//add artichoke_building
let artichoke = new Entity()
artichoke.addComponent(new GLTFShape('models/artichoke.glb'))
artichoke.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
)
engine.addEntity(artichoke)

// THE HALLWAY (PICTURES FRAMES & NFTs)

//add hallway
let hallway = new Entity()
hallway.addComponent(new GLTFShape('models/hallway.glb'))
hallway.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
)
engine.addEntity(hallway)

// THE MOUNTAINS (TUTORIAL SPACE)

//add mountains
let mountains = new Entity()
mountains.addComponent(new GLTFShape('models/mountains.glb'))
mountains.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
)
engine.addEntity(mountains)

// MOON TOWER

//add moon_tower_building
let moon_tower = new Entity()
moon_tower.addComponent(new GLTFShape('models/moon-tower.glb'))
moon_tower.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
)
engine.addEntity(moon_tower)

//add MoonTower_Action_Cosmos
let MoonTower_Action_Cosmos = new Entity()
MoonTower_Action_Cosmos.addComponent(
  new GLTFShape('models/MoonTower_Action_Cosmos.glb')
)
MoonTower_Action_Cosmos.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
)
engine.addEntity(MoonTower_Action_Cosmos)

//add MoonTower_Action_Moon
let MoonTower_Action_Moon = new Entity()
MoonTower_Action_Moon.addComponent(
  new GLTFShape('models/MoonTower_Action_Moon.glb')
)
MoonTower_Action_Moon.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
)
const MoonTower_Action_MoonAnimator = new Animator()
MoonTower_Action_Moon.addComponent(MoonTower_Action_MoonAnimator)
let playMoonTower_Action_Moon = new AnimationState(
  'MoonTower_Action_MoonDark.001'
)
MoonTower_Action_MoonAnimator.addClip(playMoonTower_Action_Moon)
playMoonTower_Action_Moon.play()
engine.addEntity(MoonTower_Action_Moon)

//add MoonTower_Action_Ringu
let MoonTower_Action_Ringu = new Entity()
MoonTower_Action_Ringu.addComponent(
  new GLTFShape('models/MoonTower_Action_Ringu.glb')
)
MoonTower_Action_Ringu.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
)
engine.addEntity(MoonTower_Action_Ringu)

//add TheWhale_Action_Sculpture
let TheWhale_Action_Sculpture = new Entity()
TheWhale_Action_Sculpture.addComponent(
  new GLTFShape('models/TheWhale_Action_Sculpture.glb')
)
TheWhale_Action_Sculpture.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
)
engine.addEntity(TheWhale_Action_Sculpture)

//add Gallery_action_Moebius
let Gallery_action_Moebius = new Entity()
Gallery_action_Moebius.addComponent(
  new GLTFShape('models/Gallery_action_Moebius.glb')
)
Gallery_action_Moebius.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
)
engine.addEntity(Gallery_action_Moebius)

//CORE BUILDING

//add core_building
let core_building = new Entity()
core_building.addComponent(new GLTFShape('models/core_building.glb'))
core_building.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
)
engine.addEntity(core_building)

// THE GARDEN (CREATORS BUILDING)

//add garden
let garden = new Entity()
garden.addComponent(new GLTFShape('models/garden.glb'))
garden.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
)
engine.addEntity(garden)

//CONFERENCE BUILDING

//add auditorium
let auditorium = new Entity()
auditorium.addComponent(new GLTFShape('models/auditorium.glb'))
auditorium.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
)
engine.addEntity(auditorium)

// SHALE BUILDING

//add shell_building
let shell = new Entity()
shell.addComponent(new GLTFShape('models/shell.glb'))
shell.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
)
engine.addEntity(shell)

//add shoe_prop
let shoe_prop = new Entity()
shoe_prop.addComponent(new GLTFShape('models/shoe_prop.glb'))
shoe_prop.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
)
engine.addEntity(shoe_prop)

//add tshirt_prop
let tshirt_prop = new Entity()
tshirt_prop.addComponent(new GLTFShape('models/tshirt_prop.glb'))
tshirt_prop.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
)
engine.addEntity(tshirt_prop)

//WHALE BUILDING (WEARABLES NFTs)

//add whale
let whale = new Entity()
whale.addComponent(new GLTFShape('models/whale.glb'))
whale.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
)
engine.addEntity(whale)

// TRADING CENTER

//add trading_center
let trading_center = new Entity()
trading_center.addComponent(new GLTFShape('models/trading_center.glb'))
trading_center.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
)
engine.addEntity(trading_center)

//STREET MESH

//add street
let street = new Entity()
street.addComponent(new GLTFShape('models/street.glb'))
street.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
)
engine.addEntity(street)

//TELEPORTERS

//add Particles
let Particles = new Entity()
Particles.addComponent(new GLTFShape('models/Particles.glb'))
Particles.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
)
engine.addEntity(Particles)

//add mole
let mole = new Entity()
mole.addComponent(new GLTFShape('models/mole.glb'))
mole.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
)
mole.addComponent(
  new OnPointerDown(
    (e) => {
      teleport(Locations.MOLES)
    },
    {
      hoverText: 'Teleport',
    }
  )
)
engine.addEntity(mole)

// BALLOON

//add balloon
let balloon = new Entity()
balloon.addComponent(new GLTFShape('models/balloon.glb'))
balloon.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
)
engine.addEntity(balloon)

// TRAIN

//add stops
let stops = new Entity()
stops.addComponent(new GLTFShape('models/stops.glb'))
stops.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
)
engine.addEntity(stops)

//add train
let train = new Entity()
train.addComponent(new GLTFShape('models/train.glb'))
train.addComponent(
  new Transform({
    rotation: Quaternion.Euler(0, 180, 0),
  })
)
engine.addEntity(train)

//////// HACK TO LOG POSITIONS

const camera = Camera.instance

class CameraTrackSystem implements ISystem {
  update() {
    log(camera.position)
  }
}

engine.addSystem(new CameraTrackSystem())

setTriggerAreas()