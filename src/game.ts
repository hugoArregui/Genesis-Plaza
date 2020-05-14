//import utils from '../node_modules/decentraland-ecs-utils/index'
import { placeTeleports } from './modules/teleports'
import { setTriggerAreas } from './modules/elevators'
import { addWearables } from './modules/wearables'
import { placeMuseumPieces } from './modules/museum'
import { addScreen } from './modules/video'
import { addBuildings } from './modules/buildings'
import { addFaceUserSystem } from './modules/npcFaceUserSystem'
import { addRobots } from './modules/npcRobotBuilder'
import { addNFTs } from './modules/nftBuilder'
import {
  updateMessageBoards,
  updateMarketData,
  CheckServer,
  messageRefreshInterval,
} from './modules/serverHandler'

//////// HACK TO LOG POSITIONS

// class CameraTrackSystem implements ISystem {
//   update() {
//     log(Camera.instance.position)
//   }
// }

// engine.addSystem(new CameraTrackSystem())

//// ADD BUILDINGS

addBuildings()

/// ELEVATORS

setTriggerAreas()

///TELEPORTERS

placeTeleports()

/// MUSEUM

placeMuseumPieces()

/// VIDEO SCEREEN

addScreen()

//// WEARABLES

addWearables()

//// ROBOTS
const dummyTarget = new Entity()
dummyTarget.addComponent(new PlaneShape())
dummyTarget.addComponent(new Transform())

addFaceUserSystem(dummyTarget)
addRobots(dummyTarget)

//// NFTS
addNFTs()

//// FETCH CURRENT MESSAGES EN MESSAGE BOARDS
//updateMessageBoards()
engine.addSystem(new CheckServer(messageRefreshInterval))

/// FETCH DATA FOR TRADE CENTER
updateMarketData()
