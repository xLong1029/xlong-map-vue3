/*
 * 模块 : 地图图层相关
 * 作者 : 罗永梅（381612175@qq.com）
 * 日期 : 2021-08-18
 * 版本 : version 1.0
 */

// 配置
import {
  TDT_TOKEN,
  SPATIAL_REFERENCE_WKID,
  MAP_VECTOR_BASEMAP_LAYER,
  MAP_TDT_BASEMAP_LAYER,
  MAP_GRAPHICS_LAYER,
} from "config/index.js";
import TileInfo from "@arcgis/core/layers/support/TileInfo";
import WebTileLayer from "@arcgis/core/layers/WebTileLayer";
import TileLayer from "@arcgis/core/layers/TileLayer";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";

export default function () {
  // 天地图地址
  const tdtBaseUrl = "http://{subDomain}.tianditu.gov.cn/";

  const spatialReference = {
    wkid: SPATIAL_REFERENCE_WKID,
  };

  // 瓦片信息
  const tileInfo = new TileInfo({
    dpi: 90.71428571427429,
    rows: 256,
    cols: 256,
    compressionQuality: 0,
    origin: {
      x: -180,
      y: 90,
    },
    spatialReference,
    lods: [
      {
        level: 0,
        levelValue: 1,
        resolution: 0.703125,
        scale: 295497593.05875003,
      },
      {
        level: 1,
        levelValue: 2,
        resolution: 0.3515625,
        scale: 147748796.52937502,
      },
      {
        level: 2,
        levelValue: 3,
        resolution: 0.17578125,
        scale: 73874398.264687508,
      },
      {
        level: 3,
        levelValue: 4,
        resolution: 0.087890625,
        scale: 36937199.132343754,
      },
      {
        level: 4,
        levelValue: 5,
        resolution: 0.0439453125,
        scale: 18468599.566171877,
      },
      {
        level: 5,
        levelValue: 6,
        resolution: 0.02197265625,
        scale: 9234299.7830859385,
      },
      {
        level: 6,
        levelValue: 7,
        resolution: 0.010986328125,
        scale: 4617149.8915429693,
      },
      {
        level: 7,
        levelValue: 8,
        resolution: 0.0054931640625,
        scale: 2308574.9457714846,
      },
      {
        level: 8,
        levelValue: 9,
        resolution: 0.00274658203125,
        scale: 1154287.4728857423,
      },
      {
        level: 9,
        levelValue: 10,
        resolution: 0.001373291015625,
        scale: 577143.73644287116,
      },
      {
        level: 10,
        levelValue: 11,
        resolution: 0.0006866455078125,
        scale: 288571.86822143558,
      },
      {
        level: 11,
        levelValue: 12,
        resolution: 0.00034332275390625,
        scale: 144285.93411071779,
      },
      {
        level: 12,
        levelValue: 13,
        resolution: 0.000171661376953125,
        scale: 72142.967055358895,
      },
      {
        level: 13,
        levelValue: 14,
        resolution: 8.58306884765625e-5,
        scale: 36071.483527679447,
      },
      {
        level: 14,
        levelValue: 15,
        resolution: 4.291534423828125e-5,
        scale: 18035.741763839724,
      },
      {
        level: 15,
        levelValue: 16,
        resolution: 2.1457672119140625e-5,
        scale: 9017.8708819198619,
      },
      {
        level: 16,
        levelValue: 17,
        resolution: 1.0728836059570313e-5,
        scale: 4508.9354409599309,
      },
      {
        level: 17,
        levelValue: 18,
        resolution: 5.3644180297851563e-6,
        scale: 2254.4677204799655,
      },
      {
        level: 18,
        levelValue: 19,
        resolution: 2.68220901489257815e-6,
        scale: 1127.23386023998275,
      },
      {
        level: 19,
        levelValue: 20,
        resolution: 1.341104507446289075e-6,
        scale: 563.616930119991375,
      },
    ],
  });

  // 空间参照坐标系

  const TDTBasemapLeyar = new WebTileLayer(
    `${tdtBaseUrl}/img_c/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=img&STYLE=default&FORMAT=tiles&TILEMATRIXSET=c&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}&tk=${TDT_TOKEN}`,
    {
      id: MAP_TDT_BASEMAP_LAYER,
      title: "天地图影像图层",
      subDomains: ["t0"],
      tileInfo,
      spatialReference,
      fullExtent: {
        xmin: -180,
        ymin: -90,
        xmax: 180,
        ymax: 90,
        spatialReference: SPATIAL_REFERENCE_WKID,
      },
    }
  );

  // 图形绘制图层
  const graphicsLayer = new GraphicsLayer({
    id: MAP_GRAPHICS_LAYER,
    title: "图形绘制图层",
    spatialReference,
    elevationInfo: {
      mode: "on-the-ground",
    },
  });

  return {
    tdtBaseUrl,
    TDTBasemapLeyar,
    graphicsLayer,
  };
}
