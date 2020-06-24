export default class systemModel {
  path = "";
  name = "";
  component = null;

  meta = {
    isSystem: true,
    isTab: true,
    isScroll: true,
    title: ""
  };

  constructor(opts = {}) {
    const { name, title } = opts;

    this.name = name;
    this.meta.title = title || name;

    this.path = `/${name}`;
    this.component = () => import(`@/pages/${name}`);
  }
}
