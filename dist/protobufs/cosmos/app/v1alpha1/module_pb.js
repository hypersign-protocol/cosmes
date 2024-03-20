// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file cosmos/app/v1alpha1/module.proto (package cosmos.app.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * ModuleDescriptor describes an app module.
 *
 * @generated from message cosmos.app.v1alpha1.ModuleDescriptor
 */
class ModuleDescriptor extends Message {
    constructor(data) {
        super();
        /**
         * go_import names the package that should be imported by an app to load the
         * module in the runtime module registry. It is required to make debugging
         * of configuration errors easier for users.
         *
         * @generated from field: string go_import = 1;
         */
        this.goImport = "";
        /**
         * use_package refers to a protobuf package that this module
         * uses and exposes to the world. In an app, only one module should "use"
         * or own a single protobuf package. It is assumed that the module uses
         * all of the .proto files in a single package.
         *
         * @generated from field: repeated cosmos.app.v1alpha1.PackageReference use_package = 2;
         */
        this.usePackage = [];
        /**
         * can_migrate_from defines which module versions this module can migrate
         * state from. The framework will check that one module version is able to
         * migrate from a previous module version before attempting to update its
         * config. It is assumed that modules can transitively migrate from earlier
         * versions. For instance if v3 declares it can migrate from v2, and v2
         * declares it can migrate from v1, the framework knows how to migrate
         * from v1 to v3, assuming all 3 module versions are registered at runtime.
         *
         * @generated from field: repeated cosmos.app.v1alpha1.MigrateFromInfo can_migrate_from = 3;
         */
        this.canMigrateFrom = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ModuleDescriptor().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ModuleDescriptor().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ModuleDescriptor().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ModuleDescriptor, a, b);
    }
}
ModuleDescriptor.runtime = proto3;
ModuleDescriptor.typeName = "cosmos.app.v1alpha1.ModuleDescriptor";
ModuleDescriptor.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "go_import", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "use_package", kind: "message", T: PackageReference, repeated: true },
    { no: 3, name: "can_migrate_from", kind: "message", T: MigrateFromInfo, repeated: true },
]);
export { ModuleDescriptor };
/**
 * PackageReference is a reference to a protobuf package used by a module.
 *
 * @generated from message cosmos.app.v1alpha1.PackageReference
 */
class PackageReference extends Message {
    constructor(data) {
        super();
        /**
         * name is the fully-qualified name of the package.
         *
         * @generated from field: string name = 1;
         */
        this.name = "";
        /**
         * revision is the optional revision of the package that is being used.
         * Protobuf packages used in Cosmos should generally have a major version
         * as the last part of the package name, ex. foo.bar.baz.v1.
         * The revision of a package can be thought of as the minor version of a
         * package which has additional backwards compatible definitions that weren't
         * present in a previous version.
         *
         * A package should indicate its revision with a source code comment
         * above the package declaration in one of its files containing the
         * text "Revision N" where N is an integer revision. All packages start
         * at revision 0 the first time they are released in a module.
         *
         * When a new version of a module is released and items are added to existing
         * .proto files, these definitions should contain comments of the form
         * "Since Revision N" where N is an integer revision.
         *
         * When the module runtime starts up, it will check the pinned proto
         * image and panic if there are runtime protobuf definitions that are not
         * in the pinned descriptor which do not have
         * a "Since Revision N" comment or have a "Since Revision N" comment where
         * N is <= to the revision specified here. This indicates that the protobuf
         * files have been updated, but the pinned file descriptor hasn't.
         *
         * If there are items in the pinned file descriptor with a revision
         * greater than the value indicated here, this will also cause a panic
         * as it may mean that the pinned descriptor for a legacy module has been
         * improperly updated or that there is some other versioning discrepancy.
         * Runtime protobuf definitions will also be checked for compatibility
         * with pinned file descriptors to make sure there are no incompatible changes.
         *
         * This behavior ensures that:
         * * pinned proto images are up-to-date
         * * protobuf files are carefully annotated with revision comments which
         *   are important good client UX
         * * protobuf files are changed in backwards and forwards compatible ways
         *
         * @generated from field: uint32 revision = 2;
         */
        this.revision = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PackageReference().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PackageReference().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PackageReference().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(PackageReference, a, b);
    }
}
PackageReference.runtime = proto3;
PackageReference.typeName = "cosmos.app.v1alpha1.PackageReference";
PackageReference.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "revision", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
]);
export { PackageReference };
/**
 * MigrateFromInfo is information on a module version that a newer module
 * can migrate from.
 *
 * @generated from message cosmos.app.v1alpha1.MigrateFromInfo
 */
class MigrateFromInfo extends Message {
    constructor(data) {
        super();
        /**
         * module is the fully-qualified protobuf name of the module config object
         * for the previous module version, ex: "cosmos.group.module.v1.Module".
         *
         * @generated from field: string module = 1;
         */
        this.module = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MigrateFromInfo().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MigrateFromInfo().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MigrateFromInfo().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MigrateFromInfo, a, b);
    }
}
MigrateFromInfo.runtime = proto3;
MigrateFromInfo.typeName = "cosmos.app.v1alpha1.MigrateFromInfo";
MigrateFromInfo.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "module", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
export { MigrateFromInfo };
//# sourceMappingURL=module_pb.js.map