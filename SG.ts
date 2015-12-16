// utility function to make sure we don't have too small numbers
function epsilon( value: number ): number {
    return Math.abs( value ) < 0.000001 ? 0 : value;
}

// convert degrees to radians
var degreeToRadiansFactor = Math.PI / 180;
function degToRad( degrees: number): number {
    return degrees * degreeToRadiansFactor;
}

// convert radians to degress
var radianToDegreesFactor = 180 / Math.PI;
function radToDeg( radians: number): number {
    return radians * radianToDegreesFactor;
}    
	
/////////////////////////////
// classes adapted from a1, the Typescript RayTracer sample
export class Vector {
    constructor(public x: number,
                public y: number,
                public z: number) {
    }
    static times(k: number, v: Vector) { return new Vector(k * v.x, k * v.y, k * v.z); }
    static minus(v1: Vector, v2: Vector) { return new Vector(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z); }
    static plus(v1: Vector, v2: Vector) { return new Vector(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z); }
    static dot(v1: Vector, v2: Vector) { return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z; }
    static mag(v: Vector) { return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z); }
    static norm(v: Vector) {
        var mag = Vector.mag(v);
        var div = (mag === 0) ? Infinity : 1.0 / mag;
        return Vector.times(div, v);
    }
    static cross(v1: Vector, v2: Vector) {
        return new Vector(v1.y * v2.z - v1.z * v2.y,
                          v1.z * v2.x - v1.x * v2.z,
                          v1.x * v2.y - v1.y * v2.x);
    }
}

export class Color {
    constructor(public r: number,
                public g: number,
                public b: number) {
    }
    static scale(k: number, v: Color) { return new Color(k * v.r, k * v.g, k * v.b); }
    static plus(v1: Color, v2: Color) { return new Color(v1.r + v2.r, v1.g + v2.g, v1.b + v2.b); }
    static times(v1: Color, v2: Color) { return new Color(v1.r * v2.r, v1.g * v2.g, v1.b * v2.b); }
    static white = new Color(1.0, 1.0, 1.0);
    static grey = new Color(0.5, 0.5, 0.5);
    static black = new Color(0.0, 0.0, 0.0);
    static background = Color.black;
    static defaultColor = Color.black;
    static random = new Color (Math.random(), Math.random(), Math.random());
    static toDrawingColor(c: Color) {
        var legalize = d => d > 1 ? 1 : d;
        return {
            r: Math.floor(legalize(c.r) * 255),
            g: Math.floor(legalize(c.g) * 255),
            b: Math.floor(legalize(c.b) * 255)
        }
    }
}

///////////////////////////////////////////
// new minimal matrix class
export class Matrix {
    // the matrix elements
    elements: number[];
    
    // construct a new matrix (including copying one and creating an identity matrix)
	constructor ( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 ) {
    	this.elements = new Array<number>( 16 );
        var te = this.elements;
		te[ 0 ] = n11; te[ 4 ] = n12; te[ 8 ] = n13; te[ 12 ] = n14;
		te[ 1 ] = n21; te[ 5 ] = n22; te[ 9 ] = n23; te[ 13 ] = n24;
		te[ 2 ] = n31; te[ 6 ] = n32; te[ 10 ] = n33; te[ 14 ] = n34;
		te[ 3 ] = n41; te[ 7 ] = n42; te[ 11 ] = n43; te[ 15 ] = n44;
		return this;
	}

    // transpose the matrix, returning a new matrix with the result
    static transpose(m: Matrix): Matrix {
        var result = new Matrix(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
        for(var i = 0; i < 4; i++){
           for(var j = 0; j < 4; j++){
                result.elements[i + (j*4)] = m.elements[j + (i*4)];
            } 
        }
        return result;
    }     

    // copy the matrix to a new matrix
	static copy (m: Matrix): Matrix {
        var result = new Matrix(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
        for(var i = 0; i < 16; i++){
            result.elements[i] = m.elements[i];
        }
        return result;
	}

    // return a new matrix containing the identify matrix
	static identity(): Matrix { 
        return new Matrix(1, 0, 0, 0, 
                          0, 1, 0, 0, 
                          0, 0, 1, 0, 
                          0, 0, 0, 1); 
    }

    // create a new rotation matrix from the input vector. 
    // eu.x, eu.y, eu.z contain the rotations in degrees around the three axes. 
    // Apply the rotations in the order x, y, z.
    static makeRotationFromEuler (eu: Vector): Matrix {                  
        var x_rotation = new Matrix(1,0,0,0,0,Math.cos(epsilon(degToRad(eu.x))),-Math.sin(epsilon(degToRad(eu.x))),0,0,Math.sin(epsilon(degToRad(eu.x))), Math.cos(epsilon(degToRad(eu.x))),0,0,0,0,1);                        
        var y_rotation = new Matrix(Math.cos(epsilon(degToRad(eu.y))),0,Math.sin(epsilon(degToRad(eu.y))),0,0,1,0,0,-Math.sin(epsilon(degToRad(eu.y))),0,Math.cos(epsilon(degToRad(eu.y))),0,0,0,0,1);                             
        var z_rotation = new Matrix(Math.cos(epsilon(degToRad(eu.z))),-Math.sin(epsilon(degToRad(eu.z))),0,0,Math.sin(epsilon(degToRad(eu.z))),Math.cos(epsilon(degToRad(eu.z))),0,0,0,0,1,0,0,0,0,1);                       
        return x_rotation.multiply(y_rotation).multiply(z_rotation);        
	}

    // create a new translation matrix from the input vector
    // t.x, t.y, t.z contain the translation values in each direction
	static makeTranslation(t: Vector): Matrix {
        return new Matrix(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1);
	}

    // create a new scale matrix from the input vector
    // s.x, s.y, s.z contain the scale values in each direction
	static makeScale(s: Vector): Matrix {
         return new Matrix(s.x,0,0,0,0,s.y,0,0,0,0,s.z,0,0,0,0,1);
    }
        
    // compose transformations with multiplication.  Multiply this * b, 
    // returning the result in a new matrix
   	multiply (b: Matrix ): Matrix {
        var result = new Matrix(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
        result.elements[0] = this.elements[0]*b.elements[0] + this.elements[4] * b.elements[1] + this.elements[8] * b.elements[2] + this.elements[12] * b.elements[3];
        result.elements[1] = this.elements[1]*b.elements[0] + this.elements[5] * b.elements[1] + this.elements[9] * b.elements[2] + this.elements[13] * b.elements[3];
        result.elements[2] = this.elements[2]*b.elements[0] + this.elements[6] * b.elements[1] + this.elements[10] * b.elements[2] + this.elements[14] * b.elements[3];
        result.elements[3] = this.elements[3]*b.elements[0] + this.elements[7] * b.elements[1] + this.elements[11] * b.elements[2] + this.elements[15] * b.elements[3];
        result.elements[4] = this.elements[0]*b.elements[4] + this.elements[4] * b.elements[5] + this.elements[8] * b.elements[6] + this.elements[12] * b.elements[7];
        result.elements[5] = this.elements[1]*b.elements[4] + this.elements[5] * b.elements[5] + this.elements[9] * b.elements[6] + this.elements[13] * b.elements[7];
        result.elements[6] = this.elements[2]*b.elements[4] + this.elements[6] * b.elements[5] + this.elements[10] * b.elements[6] + this.elements[14] * b.elements[7];
        result.elements[7] = this.elements[3]*b.elements[4] + this.elements[7] * b.elements[5] + this.elements[11] * b.elements[6] + this.elements[15] * b.elements[7];
        result.elements[8] = this.elements[0]*b.elements[8] + this.elements[4] * b.elements[9] + this.elements[8] * b.elements[10] + this.elements[12] * b.elements[11];
        result.elements[9] = this.elements[1]*b.elements[8] + this.elements[5] * b.elements[9] + this.elements[9] * b.elements[10] + this.elements[13] * b.elements[11];
        result.elements[10] = this.elements[2]*b.elements[8] + this.elements[6] * b.elements[9] + this.elements[10] * b.elements[10] + this.elements[14] * b.elements[11];
        result.elements[11] = this.elements[3]*b.elements[8] + this.elements[7] * b.elements[9] + this.elements[11] * b.elements[10] + this.elements[15] * b.elements[11];
        result.elements[12] = this.elements[0]*b.elements[12] + this.elements[4] * b.elements[13] + this.elements[8] * b.elements[14] + this.elements[12] * b.elements[15];
        result.elements[13] = this.elements[1]*b.elements[12] + this.elements[5] * b.elements[13] + this.elements[9] * b.elements[14] + this.elements[13] * b.elements[15];
        result.elements[14] = this.elements[2]*b.elements[12] + this.elements[6] * b.elements[13] + this.elements[10] * b.elements[14] + this.elements[14] * b.elements[15];
        result.elements[15] = this.elements[3]*b.elements[12] + this.elements[7] * b.elements[13] + this.elements[11] * b.elements[14] + this.elements[15] * b.elements[15];
        return result;   
	}

    // get the translation/positional componenet out of the matrix
    getPosition(): Vector {
        var result = new Vector(0,0,0);
        result.x = this.elements[12];
        result.y = this.elements[13];
        result.z = this.elements[14];
        return result;
    }
    
    // get the x, y and z vectors out of the rotation part of the matrix
    getXVector(): Vector {
        var result = new Vector(0,0,0);
        result.x = this.elements[0];
        result.y = this.elements[1];
        result.z = this.elements[2];
        return result;
    }
    getYVector(): Vector {
        var result = new Vector(0,0,0);
        result.x = this.elements[4];
        result.y = this.elements[5];
        result.z = this.elements[6];
        return result;
    }
    getZVector(): Vector {
        var result = new Vector(0,0,0);
        result.x = this.elements[8];
        result.y = this.elements[9];
        result.z = this.elements[10];
        return result;
    }
}

// The nodes in the graph and the scene are inspired by the raytracer, but are different.
// All the nodes in the tree are Things
export class Thing {
    // the children of the node, and the parent
    children: Thing[];
    parent: Thing;
    
    // store position and scale as vectors, but orientation as a matrix, since there are many
    // ways to create an orientation matrix.
    position: Vector;
    rotation: Matrix;
    scale: Vector;
    
    // the transform should be computed as position * rotation * scale, and NOT be set by the 
    // programmer who is using this library
    transform: Matrix;
    
    // inverse should be computed 
    inverseTransform: Matrix;
    worldTransform: Matrix;
        
    constructor() {
        // we'll provide the constructor as a hint
        this.position = new Vector(0,0,0);
        this.rotation = Matrix.identity();
        this.scale = new Vector(1,1,1);
        
        this.parent = undefined;
        this.children = new Array();
        this.transform = Matrix.identity();
        this.inverseTransform = Matrix.identity();
        this.worldTransform = Matrix.identity();
    }

    // compute transform from position * rotation * scale and inverseTransform from their inverses 
    computeTransforms() {
        var pos_translation:Matrix = Matrix.makeTranslation(this.position);
        var scale:Matrix = Matrix.makeScale(this.scale); 
        var transform_matrix:Matrix = pos_translation.multiply(this.rotation).multiply(scale);
        this.transform = transform_matrix;
        var x_inverse_scale = 1/this.scale.x;
        var y_inverse_scale = 1/this.scale.y;
        var z_inverse_scale = 1/this.scale.z;
        var x_pos_inverse = -this.position.x;
        var y_pos_inverse = -this.position.y;
        var z_pos_inverse = -this.position.z;
        var rot_inverse = Matrix.transpose(this.rotation);
        var scale_inverse = new Vector(x_inverse_scale,y_inverse_scale,z_inverse_scale);
        var pos_inverse = new Vector(x_pos_inverse, y_pos_inverse, z_pos_inverse);
        this.inverseTransform = (Matrix.makeScale(scale_inverse)).multiply(rot_inverse).multiply(Matrix.makeTranslation(pos_inverse)); 
    }    

    // add a child to this Thing.  Be sure to take care of setting the Thing's parent to this
    add(c: Thing) {
        this.children.push(c);
        c.parent = this;
    }

    // remove a Thing    
    remove(c: Thing) {
        for(var i = this.children.length - 1; i > 0 ;i--){
            if (this.children[i] == c){
                this.children[i].parent = undefined;
                this.children[i] = null;
                return;
            }
        }
    }

    // traverse the graph, executing the provided callback on this node and it's children
    // execute the callback before traversing the children
	traverse ( callback: (obj: Thing ) => void ) {
        //should have access to children
        callback(this);
        for(var i = 0; i < this.children.length; i++){
            this.children[i].traverse(callback);
        }
	}
}

// a simple interface for the surface color of a DIV.  We aren't doing any fancy lighting here.
export interface Surface {
    diffuse: Color;
}

// Things that are Drawable.  Only one here, the HTMLDivThing below.  
// A simple implementation is provided, as the class just holds some common data 
// for all drawable Things
export class Drawable extends Thing {
    surface: Surface;

    constructor() {
        super();
        this.surface = {diffuse: Color.white};
    }    
    
    setMaterial(s: Surface) {
        this.surface = s;
    }    
}

// The HTMLDivThing is simply a holder for the div being manipulated by the library.
// By having it be a class, we can recognize when a node is one of these and handle appropriately
export class HTMLDivThing extends Drawable {    
    constructor(public div: HTMLDivElement) {
        super();
        // set the position style of this to 'absolute' since we'll be moving it around
    	this.div.style.position = 'absolute';        
    }
}

// A simple Thing for a Light
export class Light extends Thing {
    constructor (public color: Color) {
       super(); 
    }
}

// The Camera Thing.  There must be one and only one in the Scene.
export class Camera extends Thing {
    // hint:  you will need to figure out and keep track of the inverse transform from
    // the camera up to the root of the scene.  
    worldInverseTransform: Matrix;
    
    constructor(public fovy: number) {
        super();
		this.worldInverseTransform = Matrix.identity();
    }

    // get the focal length (distance from the viewplane) for a window of a specified
    // height and the camera's fovy    
    getFocalLength (height: number): number {
       return (height/2)/Math.tan(degToRad(this.fovy/2));
    }
}
 
export class Scene {
    world: Thing;
    camera: Camera;
    
    // an ambient color. Default to the defaultColor
    ambient: Color = Color.defaultColor;
    
    // internal
    private domElement: HTMLDivElement;
    private width: number;
    private height: number;
            
    // cached
    private lights: Light[];
    
    // We are providing a constructor for convenience
    constructor(public container: HTMLDivElement) {
        this.lights = new Array();
        this.world = new Thing();
        this.camera = undefined;

        // we will create a NEW DOM element inside the provided container div
        this.domElement = document.createElement( 'div' );

        // uncomment this to clip the contents of the domElement to the boundaries of the 
        // domElement; otherwise, div's can go outside of it's boundaries (useful for 
        // debugging!)
        //this.domElement.style.overflow = 'hidden';

        // set the transform-style to "preserve-3d" so the 3D values inherit
        this.domElement.style.transformStyle
            = this.domElement.style["-webkit-transform-style"]
            = this.domElement.style["-moz-transform-style"]
            = this.domElement.style["-o-transform-style"]
            = this.domElement.style["-ms-transform-style"] = "preserve-3d";

        // add our new DOM element to the provided container
        this.container.appendChild(this.domElement);

        // get the size of the provided container, and set our DOM element to it's size       
        var rect = container.getBoundingClientRect();
        this.width = rect.width;
        this.height = rect.height;
		this.domElement.style.width = this.width + 'px';
		this.domElement.style.height = this.height + 'px';
        
        // CSS uses a weird +y is DOWN coordinate frame, so we're going to
        // scale by -1 in Y in each of the elements, and then undo that scale here.
        // By doing this, all of our transformations can by in the more common
        // +1 is UP coordinate frame 
        this.domElement.style.transform   			
                            = this.domElement.style["-webkit-transform"]
                            = this.domElement.style["-moz-transform"]
                            = this.domElement.style["-o-transform"]
                            = this.domElement.style["-ms-transform"] 
                            = "matrix3d(1,0,0,0, 0,-1,0,0, 0,0,1,0, 0,0,0,1)"; 
    }

    // internal function to compute the color of a Drawable.  The color is a simple
    // diffuse Lambertian color, as described in chapter 10.1.
    // This function should account for all lights and an ambient light
    private shade(thing: Drawable, pos: Vector, normal: Vector): Color {
        var result: Color = new Color(0,0,0);
        for(var i = 0; i < this.lights.length; i++){
           var light_world_pos = this.lights[i].worldTransform.getPosition();
           var l = Vector.norm(Vector.minus(light_world_pos, pos));
           var n = Vector.norm(normal);
           var currColor = this.lights[i].color;
           var l_n = Math.max(0, Vector.dot(l,n));
           var tempColor = Color.scale(l_n, currColor);
           result = Color.plus(result, tempColor);
        }
        return Color.toDrawingColor(Color.plus(this.ambient,Color.times(result, thing.surface.diffuse)));
    }

    // convenience function provided so you don't have to fight with this.  
    // we invert Y here, as described above
    getObjectCSSMatrix( m: Matrix ): string {
		var elements = m.elements;

		return 'matrix3d(' +
			epsilon( elements[ 0 ]  ) + ',' +
			epsilon( elements[ 1 ]  ) + ',' +
			epsilon( elements[ 2 ]  ) + ',' +
			epsilon( elements[ 3 ]  ) + ',' +
			epsilon( - elements[ 4 ]  ) + ',' +
			epsilon( - elements[ 5 ]  ) + ',' +
			epsilon( - elements[ 6 ]  ) + ',' +
			epsilon( - elements[ 7 ]  ) + ',' +
			epsilon( elements[ 8 ]  ) + ',' +
			epsilon( elements[ 9 ]  ) + ',' +
			epsilon( elements[ 10 ]  ) + ',' +
			epsilon( elements[ 11 ]  ) + ',' +
			epsilon( elements[ 12 ]  ) + ',' +
			epsilon( elements[ 13 ]  ) + ',' +
			epsilon( elements[ 14 ]  ) + ',' +
			epsilon( elements[ 15 ]  ) +
		')';
	};
    
    // the render function.
    //
    // In here, you should:
    // - update all the Things' internal matrices
    // - update all the Things' worldTransforms
    // apply local transforms times the ones above world transforms
    // - find the Lights and save them
    // - find the Camera and save it, and figure out it's inverse transformation to the root
    // - set the perspective on this.domElement from the focalLength, as follows:
    //         this.domElement.style.perspective 
    //                = this.domElement.style["-webkit-perspective"]
    //                = this.domElement.style["-moz-perspective"]
    //                = this.domElement.style["-o-perpective"]
    //                = this.domElement.style["-ms-perspective"] 
    //                = focalLength.toString() + "px";
    // - for each object, figure out the entire transformation to that object
    //   (including the inverse camera transformation). 
    // - add the DIV's in the HTMLDivThings directly to this.domElement (do not use a
    //   heirarchy) and set the transformation as follows:
    //        const transformStr = this.getObjectCSSMatrix(m);
    //        obj.div.style.transform   			
    //                        = obj.div.style["-webkit-transform"]
    //                        = obj.div.style["-moz-transform"]
    //                        = obj.div.style["-o-transform"]
    //                        = obj.div.style["-ms-transform"] = transformStr; 
    //
    // hint: you will need to traverse the graph more than once to do this.
    //
    render() {  
        
        this.lights = [];
   
        var renderHelper = (obj: Thing) => {
            // update all the Things' internal matrices
            obj.computeTransforms();
            // update all the Things' worldTransforms
            if(obj.parent != undefined){
                obj.worldTransform = obj.parent.worldTransform.multiply(obj.transform);
            }else{
                obj.worldTransform = obj.transform;
            }
            // find the Lights and save them
            if(obj instanceof Light){
                this.lights.push(obj);
            }
            // find the Camera and save it
            if(obj instanceof Camera){
                this.camera = obj;
            }
        }
        this.world.traverse(renderHelper);
        
        // figure out camera's inverse transformation to the root
        if(this.camera != null){
            var camera_parent = this.camera.parent;
            this.camera.worldInverseTransform = Matrix.identity();
            while(camera_parent != null){
                var parent_cam_world_inverse = this.camera.worldInverseTransform.multiply(camera_parent.inverseTransform);
                this.camera.worldInverseTransform = parent_cam_world_inverse;
                camera_parent = camera_parent.parent;
            }
            var this_cam_world_inverse = this.camera.worldInverseTransform.multiply(this.camera.inverseTransform);
            this.camera.worldInverseTransform = this_cam_world_inverse;
        }
        
        this.domElement.style.perspective 
                   = this.domElement.style["-webkit-perspective"]
                   = this.domElement.style["-moz-perspective"]
                   = this.domElement.style["-o-perpective"]
                   = this.domElement.style["-ms-perspective"] 
                   = this.camera.getFocalLength(this.height).toString()+ "px";
                   
        var divHelper = (obj : Thing) => {
            if(obj instanceof HTMLDivThing){
                 if(obj.div!=null){
                   this.domElement.appendChild(obj.div);
                    var cam_world_inverse = this.camera.worldInverseTransform.multiply(obj.worldTransform);
                    const transformStr = this.getObjectCSSMatrix(cam_world_inverse);
                    obj.div.style.transform   			
                            = obj.div.style["-webkit-transform"]
                            = obj.div.style["-moz-transform"]
                            = obj.div.style["-o-transform"]
                            = obj.div.style["-ms-transform"] = transformStr;
                    var obj_world_transform = obj.worldTransform.getPosition();
                    var obj_z_vector = obj.worldTransform.getZVector();
                    var shade = this.shade(obj, obj_world_transform, obj_z_vector);
                    obj.div.style.backgroundColor = 'rgb(' + shade.r + ',' + shade.g + ',' + shade.b + ')';
                 }
             } 
        }
        this.world.traverse(divHelper);
    }
}